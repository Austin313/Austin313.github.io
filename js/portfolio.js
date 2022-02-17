// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

//duping so showcase is independent from the first slides
function showSlides1(n) {
    var slides1 = document.getElementsByClassName("mySlides1"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots1 = document.getElementsByClassName("dot1"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides1.length) { slide1Index = 1 }; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) { slide1Index = slides1.length }; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides1.length; i++) {
        slides1[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots1.length; i++) {
        dots1[i].className = dots1[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides1[slide1Index - 1].style.display = "block"; // This displays the image in the slideshow
    dots1[slide1Index - 1].className += " active"; // This adds the active styling to the dot associated with the image
}
// This function displays the first image in the slideshow when the page loads
var slide1Index = 1;
showSlides1(slide1Index);

// This function changes the slide when the left or right arrows are clicked
function plusSlides1(n) {
    showSlides1(slide1Index += n);
}

// This function changes the slide when the dots are clicked
function currentSlide1(n) {
    showSlides1(slide1Index = n);
}
