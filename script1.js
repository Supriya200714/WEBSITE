// ================================
// Supriya Portfolio - JavaScript
// ================================

// Website loaded message
console.log("Welcome to Supriya's Portfolio!");


// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ================================
// Current Year in Footer
// ================================

const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.innerHTML =
        `© ${new Date().getFullYear()} Supriya. All Rights Reserved.`;
}


// ================================
// Button Click Message
// ================================

const projectButtons = document.querySelectorAll(".project-buttons .btn");

projectButtons.forEach(button => {

    button.addEventListener("click", function () {

        console.log("Project button clicked!");

    });

});