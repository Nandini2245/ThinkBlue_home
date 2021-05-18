var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var index = 0;
    change();

    function change() {

        //Collect all images with class 'slides'
        var x = document.getElementsByClassName('myslides');

        //Set all the images display to 'none' (invisible)
        for(var i = 0; i < x.length; i++) { 
            x[i].style.transition= "width 2s";
            x[i].style.display = "none"; 
    
        }

        //Increment index variable
        index++;

        //Set index to 1 if it's greater than the amount of images
        if(index > x.length) { 
            index = 1; 
        }

        //set image display to 'block' (visible)
        x[index - 1].style.display = "block";

        //set loop to change image every 3000 milliseconds (3 seconds)
        setTimeout(change, 2000);
    }
