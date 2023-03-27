import { getMovies } from "./repository.js";
import express, { json, request, response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1/movies/all", async (request, response) => {
  let movies = await getMovies();
  response.status(200).json(movies);
});

app.listen(3000, () => {
  console.log("express is listening on 3000");
});
