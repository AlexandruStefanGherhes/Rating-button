// "use strict";

const submitBtn = document.querySelector(".btn-submit");
const modal = document.querySelector(".modal-overlay");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".btn-closeModal");
const ratingBtns = document.querySelectorAll(".rating-btn");
const score = document.querySelector(".score");
// console.log(ratingBtns);
let stars_score = 3; // default rating

//// Rating button ////
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", handleRatingBtnClick);
});

function handleRatingBtnClick(event) {
  ratingBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");
  stars_score = event.target.textContent;
  console.log(stars_score);
}

/// Function for removing 'hidden' class of modal ///
const removeModal = function () {
  document.querySelector(".modal-container").classList.remove("hidden");
  score.textContent = stars_score;
  document.querySelector(".overlay").classList.remove("hidden");
};

/// Function for adding 'hidden' class to modal
const closeModal = function () {
  document.querySelector(".modal-container").classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
};

/// Activate Modal ///
submitBtn.addEventListener("click", removeModal);

///Remove Modal by clicking outside of it///

overlay.addEventListener("click", closeModal);

/// Remove Modal by pressing 'Escape' ///
document.addEventListener("keydown", function (e) {
  // console.log(e.key);
  if (e.key === "Escape") {
    closeModal();
  }
});

closeBtn.addEventListener("click", closeModal);
// console.log(closeBtn)
