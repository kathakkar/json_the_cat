const request = require('request');
const { fetchBreedDescription } = require('./breedFetcher');

const breedname = process.argv[2];

const requestFun = function (breedname) {
  request(`https://api.thecatapi.co/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    if (error) {
      console.log("Request URL not found");
    } else {
      const data = JSON.parse(body);
      if (data.length === 0){
        console.log("404 - breed not found");
      } else {
        console.log(data);
      }
    }  
  });
};

fetchBreedDescription(breedname, requestFun);