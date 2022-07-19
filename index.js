function myFunction(x) {
    x.classList.toggle("change");
 }

var toggleStatus = 1;
function toggleMenu () {
    if (toggleStatus === 1) {
        document.getElementById("mySidenav").style.height = "600px";
        document.getElementById("main").style.marginTop = "0px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.3)";
        myFunction(document.getElementById("line"));
        toggleStatus = 0;
    } else if (toggleStatus === 0) {
        document.getElementById("mySidenav").style.height = "0";
        document.getElementById("main").style.marginTop = "0";
        document.body.style.backgroundColor = "white";
        myFunction(document.getElementById("line"));
        toggleStatus = 1;
        
    } 
}

// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}



/* Both Automated and manual Slide Show Code below */
slideIndex = 1;

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides(slideIndex -= 1);
  }  else {
    showSlides(slideIndex += 1);
  }
  if (n === -1) {
    myTimer = setInterval(function() {plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function() {plusSlides(n + 1)}, 4000);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  /*var dots = document.getElementsByClassName("dot"); */
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
/* for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
} */
slides[slideIndex-1].style.display = "block";
/* dots[slideIndex-1].className += " active"; */
}

window.addEventListener("load",function() {
  showSlides(slideIndex);
  myTimer = setInterval(function() {plusSlides(1)}, 4000);
})

var modalIndex = 1;
showModal(modalIndex);

// Next/previous controls
function plusModal(n) {
  showModal(modalIndex += n);
}

// Thumbnail image controls
function currentModal(n) {
  showModal(modalIndex = n);
}

function showModal(n) {
  var i;
  var modals = document.getElementsByClassName("modalSlides");
  var captionText = document.getElementById("caption");
  if (n > modals.length) {modalIndex = 1}
  if (n < 1) {modalIndex = modals.length}
  for (i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
  modals[modalIndex-1].style.display = "block";
  captionText.innerHTML = dots[modalIndex-1].alt;
}


/* Used to select specific image with the DOTS */
/*function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function() {plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
} */


/* Adding Image Pause on hover "DON'T WORK???" */
/*var slideshowContainer = document.getElementsByClassName ('slideshow-container') [0];

slideshowContainer.addEventListener('mouseenter', pause)
slideshowContainer.addEventListener('mouseleave', resume)

pause = () => {
  clearInterval(myTimer);
}

resume = () => {
  clearInterval(myTimer);
  myTimer = setInterval(function() {plusSlides(slideIndex)}, 4000);
} */



