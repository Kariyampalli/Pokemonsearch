const express = require('express');
const path = require("path");
var unirest = require('unirest');


const app = express();


app.use('/static', express.static('extra'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/sitewelcome.html'))
});

app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname, "/siteabout.html"))
});


app.get('/pokemonsearch', (request, response) => {
  response.sendFile(path.join(__dirname, "/siteHS.html"))

});


var pokearray = [];
app.get('/pokemonsearch_start', (request, response) => {
  

  unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
    .header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
    .end(function (result) {


     //border length
      for (var i = 0; result.body.length; i++) {
        let pokemon = result.body[i];

        for (var key in pokemon) {

          if (key === 'pokemon_name') {
            if (pokemon[key] === request.query.pokemon) 
            {
             pokearray.push(pokemon);
            
              break;
            }
          }
         
        }     
      }
    });
    console.log(pokearray)//LEER????
});

/*
unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
.header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
.header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
.end(function (result) {




  for (var i = 0; result.body.length; i++) {
    let pokemon = result.body[i];

    for (var key in pokemon) {
      if (key === 'pokemon_name')
        if (pokemon[key] === "Arceus")
          response.send(pokemon[key]);


    }
  }
//Send außerhalb der Schleife als einen Array
// Man kann nicht sendFile und response.send gleichzeitig machen

});




/*
app.get('/v1', (resquest, response)=>{

console.log(request.query);

});
*/

//http://localhost:3000/pokemonsearch?search={POKEMON}&search={ID}&search={Form}





app.listen(3000, () => console.log("listening on port 3000"));

//client---> request (3rd Party module)
























/*


var giveback = " ";
app.get('/pokemonsearch_start', (request, response) => {
  console.log(request.query.pokemon);


  unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
    .header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
    .end(function (result) {



      
      for (var i = 0; result.body.length; i++) {
        let pokemon = result.body[i];

        for (var key in pokemon) {


          if (request.query.pokemon_id == null && request.query.pokemon == null) {
            if (key === "pokemon_id") {
              if (pokemon[key] === request.query.pokemon_id) {
                giveback = JSON.stringify(pokemon) + "\n";
                break;
              }
            }
          }



          if (key === 'pokemon_name') {
            if (pokemon[key] === request.query.pokemon) {
              giveback = JSON.stringify(pokemon) + "\n";
              break;
            }
          }

          if (key === "pokemon_id") {
            if (pokemon[key] === request.query.pokemon_id) {
              giveback = JSON.stringify(pokemon) + "\n";
              break;
            }
          }

          if (key === "pokemon_id") {
            if (pokemon[key] === request.query.pokemon_id) {
              giveback = JSON.stringify(pokemon) + "\n";
              break;
            }
          }

        }
      }
    });
  response.sendFile(path.join(__dirname, "/siteHS.html"))

});
console.log(giveback);
*/