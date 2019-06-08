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




const request = require("request");
var unirest = require('unirest');

const addto = process.argv[2];
const url = "http://localhost:3000/pokemonsearch_start/?pokemon=" + addto;


request({ url, json: true }, (error, response, body) => {
  console.error('error:', error);


  var pokestring = JSON.stringify(body)

  var anz = 0;
  var newstring = "";
  for (var i = 0; i <= pokestring.length; i++) {
    if (pokestring[i] == "<" || pokestring[i] == ">") {
      anz++;
    }

    if (anz % 2 == 0) {
      newstring = newstring + pokestring[i];
    }
  }

  var newstring2 = "";

  for (var i = 30; i <= newstring.length; i++) {
    if (newstring[i] != '>' && newstring[i] != '&') {
      newstring2 = newstring2 + newstring[i];
    }

  }


  var ausgabe = newstring2.replace(/\\/g, "").replace(/quot/g, "").replace(/;/g, "").replace(/undefinedundefined/g, "").replace(/"/g, "").replace(/} {/g, ",").replace(/" "/g, ",").replace(/}/g, "");
  var ausgabe2 = "";


  var splited = ausgabe.split(",");
  
  var finaleausgabe = [];
  if (ausgabe.includes("form")) {
    var d = 0;
    for (var f1 = 0; f1 <= splited.length; f1 = d) {
      var pn = f1;
      var ba = pn + 1;
      var bd = ba + 1;
      var bs = bd + 1;
      var f = bs + 1;
      var id = f + 1;




      try{
        finaleausgabe.push(poke =
          {
            'pokemon_name': (splited[pn].split(":"))[1],
            'base_attack': (splited[ba].split(":"))[1],
            'base_defense': (splited[bd].split(":"))[1],
            'base_stamina': (splited[bs].split(":"))[1],
            'form': (splited[f].split(":"))[1],
            'pokemon_id': (splited[id].split(":"))[1],
          }
        ) 
         console.log(finaleausgabe);
        }
        catch(Error)
        {
          
        }
      d = d + 6;
    }

  

  }
  else {
    var d = 0;
    for (var f1 = 0; f1 <= splited.length; f1 = d) {
      var pn = f1;
      var ba = pn + 1;
      var bd = ba + 1;
      var bs = bd + 1;
      var f = bs + 1;
     




      try{
        finaleausgabe.push(poke =
          {
            'pokemon_name': (splited[f].split(":"))[1],
            'base_attack': (splited[pn].split(":"))[1],
            'base_defense': (splited[ba].split(":"))[1],
            'base_stamina': (splited[bd].split(":"))[1],
            'pokemon_id': (splited[bs].split(":"))[1],
          }
        ) 
         console.log(finaleausgabe);
        }
        catch(Error)
        {
          
        }
      d = d + 6;
    }

  }



  /*
  var newstring3= JSON.stringify(newstring2.split("\\quot;"));
  
  console.log(JSON.parse(newstring3));
  var pokearray = JSON.parse(newstring3);
  var newpokearray
  for(var i = 0; i<= pokearray;i++)
  {
    console.log(pokearray[i]);
  }
  
  
  */

















  //var array  = newstring3.split("\\quot");


  //var array3 = JSON.stringify(array).split(",");
  //console.log(JSON.stringify(array3));

});




/* WIR HATTEN VOR ES SO ZU MACHEN, ABER SO WAR ES WARSCHEINLICH NICHT VERLANGT
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
*/