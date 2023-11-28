var currentIndex = 0;

function showSlide(index) {
  var slider = document.getElementById("image-slider");
  var totalSlides = document.querySelectorAll(".carousel-image").length;

  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  var transformValue = -currentIndex * 100 + "%";
  slider.style.transform = "translateX(" + transformValue + ")";
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Optional: Auto play the carousel
setInterval(nextSlide, 4000); // Change slide every 3 seconds
