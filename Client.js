const request = require ("request");

const addto = process.argv[2];
const url = "http://localhost:3000/pokemonsearch" + addto;

request({url,json:true},(error,response,body)=>{
  console.error('error:', error); 
  console.log("request happend");

});