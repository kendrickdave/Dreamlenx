let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4500); // Change image every 2 seconds
}

var menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px"
function togglemenu(){
if(menulist.style.maxHeight == "0px"){
menulist.style.maxHeight = "100vh"
}
else{
menulist.style.maxHeight= "0px"
}
}