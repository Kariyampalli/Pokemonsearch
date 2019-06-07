const request = require ("request");


const addto = process.argv[2];
const url = "http://localhost:3000/pokemonsearch_start/?pokemon=" + addto;

request({url, json:true}, (error,response,body) => {
  console.error('error:', error); 
  //ToDo: body ohne < || > filtern weil json sonst nicht konventieren kann
  var message = JSON.parse("hallo:2");
 
  console.log(message);
});