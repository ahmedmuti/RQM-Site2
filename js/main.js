const navbar = document.querySelector('.navbar');
const main = document.querySelector('#main');

// Get the height of the navbar
const navbarHeight = navbar.offsetHeight + 7;

// Set the margin-top of the main dynamically
main.style.marginTop = `${navbarHeight}px`;


// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.getElementById("navbar");
//     const secondSection = document.getElementById("our-vision");
//     function checkScroll() {
//         // Get the position of the second section
//         const secondSectionTop = secondSection.getBoundingClientRect().top;
//         const navbarSectionTop = navbar.getBoundingClientRect().top;


//         // Change the background of the navbar when the second section is reached

//         if (window.scrollY > 50) {

//             navbar.classList.add("scrolled");
//         } else {
//             navbar.classList.remove("scrolled");
//         }
//     }
//     checkScroll()
//     window.addEventListener("scroll", checkScroll);
// });


// Toggler button icon switch
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const icon = toggler.querySelector(".toggler-icon");
    const navbar = document.querySelector(".navbar .container");

    toggler.addEventListener("click", function () {
        icon.classList.toggle("open");
        if (icon.classList.contains("open")) {
            icon.classList.replace("ri-menu-2-line", "ri-close-line");
            navbar.classList.add('pt-2', 'rounded-3');

        } else {
            icon.classList.replace("ri-close-line", "ri-menu-2-line");
            navbar.classList.remove("bg-white", 'pt-2', 'rounded-3');

        }
    });
});


// add active link


// document.addEventListener('DOMContentLoaded', function () {
//     // Get all nav links
//     const navLinks = document.querySelectorAll('.nav-link');

//     // Loop through each link and add event listener
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             // Remove active class from all links
//             navLinks.forEach(navLink => {
//                 navLink.classList.remove('active');
//             });

//             // Add active class to the clicked link
//             this.classList.add('active');

//             // Smooth scroll to the corresponding section
//             const targetId = this.getAttribute('href');
//             const targetSection = document.querySelector(targetId);

//             if (targetSection) {
//                 targetSection.scrollIntoView({
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });

// footer height

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
    const targetSection = document.getElementById("main");

    // Get the footer's height
    const footerHeight = footer.clientHeight;

    // Set the height of the target section
    targetSection.style.marginBottom = `${footerHeight + 60}px`;
});

window.addEventListener("load", function () {
    const loadingScreen = document.getElementById("loading");
    const mainContent = document.getElementById("main");
    setTimeout(() => {
        loadingScreen.style.display = "none"; // Hide loading screen
        document.body.style.overflow = "auto"; // Hide loading screen
        AOS.init();
        AOS.refresh();
    }, 3000)

    mainContent.style.display = "block";  // Show main content
});


AOS.init();
AOS.refresh();



var swiper1 = new Swiper(".mySwiper2", {
    // slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

const swiper = new Swiper('.mySwiper3', {
    loop: true, // Enables infinite loop
    slidesPerView: 'auto', // Adjust slides to fit automatically
    spaceBetween: 10, // Space between slides
    speed: 5000, // Speed for continuous scroll
    autoplay: {
        delay: 0, // No delay
        disableOnInteraction: false, // Keeps scrolling even after user interaction
    },
    freeMode: true, // Allows continuous scrolling
    freeModeMomentum: false,
    // Ensures constant scroll without slowing down
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1400: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

$(".owl-carousel2").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    rtl: true,
    slideTransition: "linear",
    smartSpeed: 1700,

    autoplay: true,
    autoplayTimeout: 900,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 3,
        },
        800: {
            items: 4,
        },
        1000: {
            items: 8,
        },
    },
});