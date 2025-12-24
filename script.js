// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Typing Effect for the Subtitle
const text = "Professional Explorer & Digital Strategist";
const speed = 100; // speed in milliseconds
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".subtitle").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// 3. Reveal Elements on Scroll
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight / 5 * 4;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Start the typing effect when the page loads
window.onload = () => {
    document.querySelector(".subtitle").innerHTML = ""; // Clear existing text
    typeWriter();
};