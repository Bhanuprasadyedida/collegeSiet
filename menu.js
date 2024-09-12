// JavaScript to toggle the navigation links on mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    console.log('menu toggle clicked');
    
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
