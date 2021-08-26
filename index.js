
const { fetchBreedDescription } = require('./breedFetcher');

const breedname = process.argv[2];
fetchBreedDescription(breedname, (error, description) => {

  if(error === null){
    console.log(description[0].description);
  }
  else if(description == null){
    console.log(error);
  }

});

