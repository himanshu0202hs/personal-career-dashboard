
const roles = [
    "Web Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    typingElement.textContent = deleting
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);

    let delay = deleting ? 60 : 110;

    if (!deleting && charIndex > currentRole.length) {
        deleting = true;
        delay = 1000;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();
