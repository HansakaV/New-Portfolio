document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to My portfolio.";
    const typewriterText = document.querySelector(".typewriter-text");

    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typewriterText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); //
        }
    }

    typeEffect();
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollIndicator = document.getElementById('scrollIndicator');

    scrollIndicator.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
});

/*------------------------------
        Album Cover Slider
--------------------------------*/
//start added by Chase
var a = document.getElementsByTagName("a");
var cfImg = document.getElementsByClassName("coverflow__image")

var scaleI = 0;
for (scaleI; scaleI < a.length; scaleI++) {
    if (scaleI === 3) {
        continue;
    } else {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
    }
}

function prevDef(e) {
    e.preventDefault();
}

function forScale(coverflowPos) {
    for (scaleI = 0; scaleI < a.length; scaleI++) {
        a[scaleI].style.cursor = "default";
        a[scaleI].addEventListener("click", prevDef);
    }
    for (scaleI = 0; scaleI < cfImg.length; scaleI++) {
        if (cfImg[scaleI].getAttribute("data-coverflow-index") == coverflowPos) {
            cfImg[scaleI].parentElement.style.cursor = "pointer";
            cfImg[scaleI].parentElement.removeEventListener("click", prevDef);
        }
    }
}
//end added by Chase

function setupCoverflow(coverflowContainer) {
    var coverflowContainers;

    if (typeof coverflowContainer !== "undefined") {
        if (Array.isArray(coverflowContainer)) {
            coverflowContainers = coverflowContainer;
        } else {
            coverflowContainers = [coverflowContainer];
        }
    } else {
        coverflowContainers = Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));
    }

    coverflowContainers.forEach(function(containerElement) {
        var coverflow = {};
        var prevArrows, nextArrows, autoSlideInterval;

        //capture coverflow elements
        coverflow.container = containerElement;
        coverflow.images = Array.prototype.slice.apply(containerElement.getElementsByClassName('coverflow__image'));
        coverflow.position = Math.floor(coverflow.images.length / 2) + 1;

        //set indicies on images
        coverflow.images.forEach(function(coverflowImage, i) {
            coverflowImage.dataset.coverflowIndex = i + 1;
        });

        //set initial position
        coverflow.container.dataset.coverflowPosition = coverflow.position;

        //get prev/next arrows
        prevArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("prev-arrow"));
        nextArrows = Array.prototype.slice.apply(coverflow.container.getElementsByClassName("next-arrow"));

        //add event handlers
        function setPrevImage() {
            coverflow.position = Math.max(1, coverflow.position - 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        function setNextImage() {
            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        function jumpToImage(evt) {
            coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            setTimeout(function() {
                forScale(coverflow.position);
            }, 1);
        }

        function onKeyPress(evt) {
            switch (evt.which) {
                case 37: //left arrow
                    setPrevImage();
                    break;
                case 39: //right arrow
                    setNextImage();
                    break;
            }
        }

        // Auto slide functionality
        function autoSlide() {
            autoSlideInterval = setInterval(function() {
                if (coverflow.position === coverflow.images.length) {
                    coverflow.position = 1;
                } else {
                    coverflow.position += 1;
                }
                coverflow.container.dataset.coverflowPosition = coverflow.position;
                forScale(coverflow.position);
            }, 3000); // Change image every 3 seconds
        }

        prevArrows.forEach(function(prevArrow) {
            prevArrow.addEventListener('click', setPrevImage);
        });
        nextArrows.forEach(function(nextArrow) {
            nextArrow.addEventListener('click', setNextImage);
        });
        coverflow.images.forEach(function(image) {
            image.addEventListener('click', jumpToImage);
        });
        window.addEventListener('keyup', onKeyPress);

        // Start auto slide
        autoSlide();
    });
}

setupCoverflow();

document.addEventListener('DOMContentLoaded', (event) => {
    const containers = document.querySelectorAll('.container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    containers.forEach(container => {
        container.style.opacity = 0;
        container.style.transform = 'translateY(20px)';
        container.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(container);
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        console.log('Name:', form.name.value);
        console.log('Email:', form.email.value);
        console.log('Message:', form.message.value);
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const skillBars = document.querySelectorAll('.skill-percentage');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

/*Flower*/
document.addEventListener("DOMContentLoaded", () => {
    const flower = document.querySelector("#animation-flower");
    const word = document.querySelector("h1");
    const rainDrop = document.querySelector(".rain-drop");

    setTimeout(() => {
        flower.style.display = "inherit";
        word.style.display = "none";
    }, 2000);
});

function createRaindrop() {
    const body = document.querySelector("body");
    const xPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 2 + 2;

    const rainDrop = document.createElement("div");
    rainDrop.className = "rain";
    rainDrop.style.left = `${xPosition}px`;
    rainDrop.style.animationDelay = `${delay}s`;
    rainDrop.style.animationDuration = `${duration}s`;
    rainDrop.style.display = "none";
    body.appendChild(rainDrop);

    setTimeout(() => {
        rainDrop.style.display = "inherit";
    }, 800);
}

setInterval(createRaindrop, 100);