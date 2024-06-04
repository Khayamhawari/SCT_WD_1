//Responsive menu in mobile phones or tabs
const navMenu = document.getElementById('nav-item');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
})

//GSAP Library use from here

gsap.from("#img2", {
    delay: 0.4,
    duration: 1,
    opacity: 0,
    y: 60,
})

gsap.from("#img1", {
    delay: 0.4,
    duration: 1,
    opacity: 0,
    x: 60
})

gsap.from("#img3", {
    delay: 0.4,
    duration: 1,
    opacity: 0,
    y: -60
})
