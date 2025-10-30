let usernames = ["HolidayFan22", "WhovilleResident", "MovieBuff99"];
let dates = ["2024-10-30", "2024-11-15", "2024-12-01"];
let reviews = ["A holiday classic that never gets old. The Grinch is both funny and heartwarming.","I watch this every Christmas with my family. It always makes us laugh and smile.","The costumes and Jim Carrey’s performance are amazing. Such a fun movie!"];
let ratings = [5, 4, 3]; 

let reviewCards = document.querySelectorAll(".review-card");

for (let i = 0; i < reviewCards.length; i++) {
  let card = reviewCards[i];

  let ratingDiv = card.querySelector(".review-rating");
  let stars = "";
  for (let j = 0; j < ratings[i]; j++) {
    stars += "★";
  }
  for (let j = ratings[i]; j < 5; j++) {
    stars += "☆";
  }
  ratingDiv.textContent = stars;
  ratingDiv.setAttribute("data-rating", ratings[i]);

  let usernameElem = card.querySelector(".review-username");
  usernameElem.firstChild.textContent = usernames[i] + " ";
  let dateElem = card.querySelector(".review-date");
  dateElem.textContent = dates[i];

  let textElem = card.querySelector(".review-text");
  textElem.textContent = reviews[i];
}

var filterDropdown = document.getElementById('rating-filter');
filterDropdown.addEventListener('change', function() {
  var selected_rating = filterDropdown.value;

  reviewCards.forEach(card => {
    let ratingVal = card.querySelector(".review-rating").getAttribute("data-rating");

    if (selected_rating === "All" || ratingVal === selected_rating) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});




