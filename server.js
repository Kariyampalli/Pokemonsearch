const express = require('express');
const path = require("path");
var unirest = require('unirest');


const app = express();


app.use('/static', express.static('extra'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,'/sitewelcome.html'))
});

app.get('/about', (request, response) => {
  response.sendFile(path.join(__dirname,"/siteabout.html"))
});

app.get('/hearthstone', (request, response) => {
  response.sendFile(path.join(__dirname,"/siteHS.html"))
});





unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
.header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
.header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
.end(function (result) {



  for(var i = 0; result.body.length; i++)
  {
    let pokemon = result.body[i];
    
    for(var key in pokemon)
    {
       if (key === 'pokemon_name')
          if(pokemon[key]=== "Arceus")
          console.log(pokemon[key]);
      
      }
  }
});



  


//console.log(result.status, result.headers, result.body);























// hab nur getestet, wie das mit den URL funktioniert(daher nicht wichtig für die Abgabe)
//app.get("/api/courses", (request,response)=>
//{
   // response.send([1,2,3]);
//})

//app.get("/api/courses/:id", (request,response)=>
//{
  //  response.send(request.params.id);
//})

app.listen(3000,()=> console.log("listening on port 3000"));

