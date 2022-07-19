reviewIndex = 1;

function plusReviews(n) {
  clearInterval(myTimer2);
  if (n < 0) {
    showReviews(reviewIndex -= 1);
  }  else {
    showReviews(reviewIndex += 1);
  }
  if (n === -1) {
    myTimer2 = setInterval(function() {plusReviews(n + 2)}, 5000);
  } else {
    myTimer2 = setInterval(function() {plusReviews(n + 1)}, 5000);
  }
}
function showReviews(n) {
  var i;
  var reviews = document.getElementsByClassName("review-box");
  var dots = document.getElementsByClassName("dotRev");
  if (n > reviews.length) {reviewIndex = 1}
  if (n < 1) {reviewIndex = reviews.length}
  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
reviews[reviewIndex-1].style.display = "block";
dots[reviewIndex-1].className += " active";
}
window.addEventListener("load",function() {
  showReviews(reviewIndex);
  myTimer2 = setInterval(function() {plusReviews(1)}, 5000);
})
/* Used to select specific image with the DOTS */
function currentReview(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function() {plusReviews(n + 1)}, 5000);
  showReviews(reviewIndex = n);
}

/* Carousel timing solved, the timers conflicted as they had same labels */

