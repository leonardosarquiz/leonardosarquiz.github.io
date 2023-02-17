export default function sliderShow() {
  
}
 
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  var numSlides = 4; // número de slides a serem exibidos
  if (window.matchMedia("(max-width: 818px)").matches) {
    numSlides = 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length - numSlides) {
    slideIndex = 1;
  }
  for (i = slideIndex - 1; i < slideIndex + numSlides - 1; i++) {
    slides[i].style.display = "block";
  }
  setTimeout(showSlides, 2000);
}

  
  










