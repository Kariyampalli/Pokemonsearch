/*
const request = require ("request");


const addto = process.argv[2];
const url = "http://localhost:3000/pokemonsearch_start/?pokemon=" + addto;

request({url, json:true}, (error,response,body) => {
  console.error('error:', error); 
  //ToDo: body ohne < || > filtern weil json sonst nicht konventieren kann
  var message = JSON.parse("hallo:2");
 
  console.log(message);
});
*/




const request = require ("request");
var unirest = require('unirest');

const addto = process.argv[2];
const url = "http://localhost:3000/pokemonsearch_start/?pokemon=" + addto;

//Christy Teil ANFANG
request({url, json:true}, (error,response,body) => {
  console.error('error:', error); 

  var pokestring = JSON.stringify(body)

  var anz = 0;
  var newstring = "";
  for(var i = 0; i <= pokestring.length; i++)
  {
    if(pokestring[i] == "<" || pokestring[i] == ">")
    {
      anz++;
    }

    if(anz % 2 == 0)
    {
      newstring = newstring + pokestring[i];
    }
  }
  console.log(newstring + "\n");

  var newstring2= "";
  
  for(var i = 30; i <= newstring.length; i++)
  {
    if(newstring[i] != '>' && newstring[i] != '&')
    {
      newstring2 = newstring2 + newstring[i];
    } 
   
  }
  
console.log(newstring2);

var newstring3= JSON.stringify(newstring2.split("\\quot;"));

console.log(JSON.parse(newstring3));
  //var array  = newstring3.split("\\quot");


  //var array3 = JSON.stringify(array).split(",");
  //console.log(JSON.stringify(array3));

});
//Christy Teil ENDE -- Habs versucht Professor



//Mehmets Teil ANFANG
unirest.get("https://pokemon-go1.p.rapidapi.com/pokemon_stats.json")
    .header("X-RapidAPI-Host", "pokemon-go1.p.rapidapi.com")
    .header("X-RapidAPI-Key", "0569c82951mshc69f73186e5e0b3p1adc51jsnf1fc34fffc7a")
    .end(function (result) {
      for (var i = 0; result.body.Length; i++) {
        let pokemon = result.body[i];
        console.log(result.body[i].basic_attack);
        
        
        var jstats=JSON.parse('{ "base_attack":result.body[i].base_attack, "base_defense":result.body[i].base_defense, "base_stamina":result.body[i].base_stamina}');
      }
    });
//Mehmet Teil ENDE