const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showNextSlide() {
    // Move slider to show the next image
    const slider = document.querySelector(".slider");
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Switch slides every 3 seconds
setInterval(showNextSlide, 3000);
