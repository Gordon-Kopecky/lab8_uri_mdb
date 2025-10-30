let movieTitles = ["How the Grinch Stole Christmas"];
let moviePosters = ["img/grinch.jpg"];
let movieLinks = ["grinch-stole-christmas.html"];
let movieRatings = [5];


let movieCards = document.querySelectorAll(".movie-card");


for (let i = 0; i < movieCards.length; i++) {
    let card = movieCards[i];


    let img = card.querySelector(".movie-image");
    img.src = moviePosters[i];
    img.alt = movieTitles[i];

    let link = card.querySelector(".movie-link");
    link.textContent = movieTitles[i];
    link.href = movieLinks[i];


    let ratingDiv = card.querySelector(".rating");
    let stars = "";
    for (let j = 0; j < movieRatings[i]; j++) {
        stars += "★";
    }
    for (let j = movieRatings[i]; j < 5; j++) {
        stars += "☆";
    }
    ratingDiv.textContent = stars;
}
