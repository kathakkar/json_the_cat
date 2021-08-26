const request = require('request');

request(`https://api.thecatapi.co/v1/breeds/search?q=${process.argv[2]}`,(error, reesponse, body) => {
  
  if(error.code == 'ENOTFOUND') {
    console.log("Request URL not found");
  } else {
    const data = JSON.parse(body);
    if(data.length == 0){
      console.log("404 - breed not found");
    } else {
      console.log(data);
    }
  }  
});