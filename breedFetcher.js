
const request = require('request');

const fetchBreedDescription = function (breedname, callback) {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
      if (error) {
        err = "Requested URL not found";
        callback(err,null);
      } else {
        desc = JSON.parse(body);
        if (desc.length === 0){
          callback(err,null);
        } else {
          callback(null,desc[0].description);
        }
      }  
    });
};

module.exports = { fetchBreedDescription };