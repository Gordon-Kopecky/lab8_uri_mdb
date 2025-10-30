let movieTitle = ["How the Grinch Stole Christmas"];
let moviePoster = ["img/grinch.png"];
let movieRating = [5]; 
let movieSynopsis = ["A classic holiday movie where the Grinch tries to steal Christmas from Whoville, but learns the true meaning of the holiday through the kindness of the Whos."];

let img = document.querySelector(".movie-image");
img.src = moviePoster[0];
img.alt = movieTitle[0];

let name = document.querySelector(".movie-name");
name.textContent = movieTitle[0];

let desc = document.querySelector(".description");
desc.textContent = movieSynopsis[0];

let ratingDiv = document.querySelector(".rating");
let stars = "";
for (let i = 0; i < movieRating[0]; i++) {
  stars += "★";
}
for (let i = movieRating[0]; i < 5; i++) {
  stars += "☆";
}
ratingDiv.textContent = stars;