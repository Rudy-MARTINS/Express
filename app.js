const express = require("express");

const app = express();

const movies = [
    {
      id: 1,
      title: "Citizen Kane",
      director: "Orson Wells",
      year: "1941",
      color: false,
      duration: 120,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: "1972",
      color: true,
      duration: 180,
    },
    {
      id: 3,
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: "1994",
      color: true,
      duration: 180,
    },
  ];


const welcome = (req, res) => {
  res.json("Welcome to my favourite movie list");
};

app.get("/", welcome);

const getMovies = (req, res) => {
  res.json(movies);
};
app.get("/api/movies", getMovies);


const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    
    let foundMovieId = null;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id === movieId) {
        foundMovieId = movies[i];
        break;}}
        if (foundMovieId) {
            res.status(200).json(foundMovieId);
          } else {
            res.status(404).send("Not Found");
}};
  
  app.get("/api/movies/:id", getMovieById);

module.exports = app;





