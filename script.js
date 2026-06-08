// script.js

// Select the navigation bar element
const navbar = document.getElementById('navbar');

// Listen for the scroll event on the entire window
window.addEventListener('scroll', () => {
    // Check how far down the user has scrolled
    if (window.scrollY > 50) {
        // If scrolled down more than 50px, add the 'scrolled' class
        navbar.classList.add('scrolled');
    } else {
        // If at the top (less than 50px), remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});