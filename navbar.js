const hamBtn = document.getElementById("ham-btn");
const navLinks = document.getElementById("nav-links");


hamBtn.addEventListener('click', () => {
    console.log("clicked")
    const height = navLinks.offsetHeight;

    navLinks.style.transition = "transform 0.6s ease-in-out"
    navLinks.style.transform = `translateY(${2*height}px)`;
})