const express = require('express');
const path = require("path");
var unirest = require('unirest');
const http = require("http");

const app = express();
const server = http.createServer();

app.set('views', './views');
app.set('view engine', 'pug');

server.on('request', (request, response) => {
  console.log('Url:', request.url)
  console.log('Method:', request.method)

  httpUtils.handleStaticRequest(request, response)
})



app.use('/static', express.static('extra'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/extra/sitewelcome.html'))
});

app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, "/extra/siteabout.html"))
});


app.get('/pokemonsearch', (request, response) => {

  response.sendFile(path.join(__dirname, "extra/siteHS.html"))

});




app.get('/pokemonsearch_start', (request, response) => {




  unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
    .header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
    .end(function (result) {
      var pokemanss =  " ";
      //border length 
      anz = 0;

        for (var i = 0; result.body.length; i++) {
          let pokemon = result.body[i];



          try {
            if (pokemon["pokemon_name"] === request.query.pokemon) {
             pokemanss = pokemanss + " " + JSON.stringify(pokemon);
            }
          }
          catch (Error) {

          }




          anz++;

          console.log(anz);
          if (anz === 550) {
            break;
          }
        }
        
        
        response.render('ausgabe', { title: 'Hey', message: JSON.stringify(pokemanss)});
        
      });


});









app.listen(3000, () => console.log("listening on port 3000"));

//client---> request (3rd Party module)
























/*
----------------NICHT WICHTIG FÜR DIE ABGABE---------------

<input class = "input2" type="text" placeholder="ID" name="pokemon_id">
     
<input class = "input3" type="text" placeholder="Form" name="pokemon_form">
*/