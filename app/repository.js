import fs from "fs";
import path from "path";

export function getMovies() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const movies = JSON.parse(data);
        resolve(movies);
      }
    });
  });
}

export async function getSortMovies(field) {
  let movies = await getMovies();
  for (let i = 0; i < movies.length - 1; i++) {
    for (let j = i + 1; j < movies.length; j++) {
      if (movies[i][field] > movies[j][field]) {
        let aux = movies[i];
        movies[i] = movies[j];
        movies[j] = aux;
      }
    }
  }
  return movies;
}

export async function getByGenre(genre) {
  let movies = await getMovies();
  console.log(genre);
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].genre.toLowerCase() === genre.toLowerCase()) {
      return movies[i];
    }
  }
  return null;
}
