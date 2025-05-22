// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    // --- Services Dropdown Logic ---
    const servicesButton = document.getElementById('servicesButton');
    const servicesDropdown = document.getElementById('servicesDropdown');

    if (servicesButton && servicesDropdown) {
        servicesButton.addEventListener('click', function(event) {
            // Prevent the document click listener (if active) from immediately closing the dropdown
            event.stopPropagation();

            // Toggle the visibility and opacity classes
            servicesDropdown.classList.toggle('opacity-0');
            servicesDropdown.classList.toggle('invisible');
        });

        // Optional: Close the dropdown if clicked outside of it
        document.addEventListener('click', function(event) {
            // Check if the dropdown is currently visible and the click was outside
            const isDropdownVisible = !servicesDropdown.classList.contains('invisible');
            if (isDropdownVisible && !servicesButton.contains(event.target) && !servicesDropdown.contains(event.target)) {
                servicesDropdown.classList.add('opacity-0', 'invisible');
            }
        });
    }
document.addEventListener('DOMContentLoaded', function() {
    // --- about Dropdown Logic ---
    const aboutButton = document.getElementById('aboutButton');
    const aboutDropdown = document.getElementById('aboutDropdown');

    if (aboutButton && aboutDropdown) {
        aboutButton.addEventListener('click', function(event) {
            // Prevent the document click listener (if active) from immediately closing the dropdown
            event.stopPropagation();

            // Toggle the visibility and opacity classes
            aboutDropdown.classList.toggle('opacity-0');
            aboutDropdown.classList.toggle('invisible');
        });

        // Optional: Close the dropdown if clicked outside of it
        document.addEventListener('click', function(event) {
            // Check if the dropdown is currently visible and the click was outside
            const isDropdownVisible = !aboutDropdown.classList.contains('invisible');
            if (isDropdownVisible && !aboutButton.contains(event.target) && !aboutDropdown.contains(event.target)) {
                aboutDropdown.classList.add('opacity-0', 'invisible');
            }
        });
    }
    // --- Mobile Menu Toggle Logic ---
    const menuToggleButton = document.getElementById('menu-toggle'); // Corrected variable name for clarity
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggleButton && mobileMenu) {
        menuToggleButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden'); // 'hidden' class typically controls display: none
        });
    }

    // The alert "script is loading successfuly" is already in your HTML head.
    // For development, console.log is often preferred:
    // console.log("script.js loaded and DOM fully parsed");
});
