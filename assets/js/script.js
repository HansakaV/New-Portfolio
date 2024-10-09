let currentIndex = 0;
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function updateCarousel() {
    const translateXValue = -currentIndex * (cards[0].offsetWidth + 20); // 20 for margin
    cardContainer.style.transform = `translateX(${translateXValue}px)`;
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? totalCards - 1 : currentIndex - 1;
    updateCarousel();
}

function nextSlide() {
    currentIndex = (currentIndex === totalCards - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);  // Update the carousel on window resize
