const express = require("express");
const router = express.Router();
//
// const Movie = require("..Movies/models/Movies");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index.hbs", { name: "Melvin", name2: "David" });
  //res.json({ name: 'Melvin', name2: 'David'}) this is how its done with react
});

router.get("/about", (req, res, next) => {
  res.render("about.hbs", {
    greeting: "Welcome to Spanish Class",
    verbs: ["correr", "saltar", "caminar", "estudiar", "bailar", "matar"],
    words: [
      { adjective: "lindo" },
      { adjective: "fao" },
      { adjective: "bonito" },
      { adjective: "chismosa" }
    ]
  });
});

router.get("/newpage", (req, res, next) => {
  res.render("newpage");
});

module.exports = router;

// “iteration”: 0,
// “steps”: [
//   “npm i”,
//   “created .env, add PORT = 3000",
//   “create a models folder then create a Movie.js model file inside the models folder”,
//   “create the model based on the information movies information given to you in iteration 1",
//   “now create seeds.js file inside of the bin folder”,
//   “in the seeds.js file we will be using this file only once to add the initial 8 movies”,
//   “seeds.js - first require (i.e. import) the movie model and mongoose”,
//   “seeds.js - use mongoose.connect to connect to a new database”,
//   “seeds.js - insert all the movies given to you in iteration 1 as an array const”,
//   “seeds.js - after the const array create the new database using the movie model. Movie.create(nameOfMoviesArray).then....“,
//   “seeds.js - close the connection”,
//   “next iteration 2",
//   “index.hbs - add an <a> tag that will take you to /movies route”,
//   “iteration 3",
//   “index.js - create a new get route /movies that will render all a new hbs file movies.hbs (I will place this inside a movies-pages folder”,
//   “index.js - your route should render movies-pages/movies and pass the movies array found by the express method find()“,
//   “movies.hbs - iterate through the array of movies using hbs notation and display the info of each movie”,
//   “movies.hbs - create an <a> tag to route you to /movie/{{id}}“,
//   “iteration 4”,
//   “index.js - create a new get route /movie/:movieId that will find the movie through using the req.params.movieId then render movie.hbs and pass the movie found”,
//   “movie.hbs - display the theMovie information using hbs notation”




