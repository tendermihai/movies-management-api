import { getMovies, getSortMovies, getByGenre } from "./repository.js";
import express, { json, request, response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1/movies/all", async (request, response) => {
  let movies = await getMovies();
  response.status(200).json(movies);
});

app.get("/api/v1/movies/sort/:field", async (request, response) => {
  console.log(request.params);
  let movies = await getSortMovies(request.params.field);
  response.status(200).json(movies);
});

app.get("/api/v1/movies/find/genre/:genre", async (request, response) => {
  let movies = await getByGenre(request.params.genre);
  console.log(request.params.genre);
  if (movies !== null) {
    response.status(200).json(movies);
  } else {
    response.status(400).json({ message: "Filmul nu este in baza de date " });
  }
});

app.listen(3000, () => {
  console.log("express is listening on 3000");
});
