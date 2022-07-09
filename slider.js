const scrollContainer = document.querySelector('#hero-slider');
let slideOne = document.getElementById('slide-one');
let slideTwo = document.getElementById('slide-two');
let slideThree = document.getElementById('slide-three');
let slideFour = document.getElementById('slide-four');
let slideFive = document.getElementById('slide-five');

const aboutNav = document.getElementById('about');
const projectsNav = document.getElementById('projects');
const contactNav = document.getElementById('contact');

const allSlides = document.querySelectorAll('section');
const allNavs = document.querySelectorAll('nav a');

let activeSlide = document.querySelector('.active');
let nextSlide = activeSlide.nextElementSibling;
let previousSlide;


let idle = true;

const changeSlide = (direction) => {
    idle = false;
    toggleIdle();

    if (direction === 'next' && nextSlide !== null) {
        activeSlide.classList.remove('active');
        activeSlide = nextSlide;
        activeSlide.classList.add('active');
        nextSlide = activeSlide.nextElementSibling;
        previousSlide = activeSlide.previousElementSibling;
    } else if (direction === 'prev' && previousSlide !== null) {
        activeSlide.classList.remove('active');
        activeSlide = previousSlide;
        activeSlide.classList.add('active');
        previousSlide = activeSlide.previousElementSibling;
        nextSlide = activeSlide.nextElementSibling;
    } else return;

    changeBackground();
    changeNavActive();
}

const changeBackground = () => {
     if (slideOne.classList.contains('active') || slideTwo.classList.contains('active')) {
        scrollContainer.style.background = "hsl(168, 21%, 19%)";
     } else if (slideThree.classList.contains('active') || slideFour.classList.contains('active')) {
        scrollContainer.style.background = "hsl(208, 46%, 23%)";
     } else scrollContainer.style.background = "hsl(238, 46% , 30%)";
}

const changeNavActive = () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'))
    if (slideTwo.classList.contains('active')) {
        aboutNav.classList.add('nav-active');
     } else if (slideThree.classList.contains('active') || slideFour.classList.contains('active')) {
        projectsNav.classList.add('nav-active');
     } else if (slideFive.classList.contains('active')) {
        contactNav.classList.add('nav-active');
     } else return;

}

const toggleIdle = () => {
    let timer;
    clearTimeout(timer);
    setTimeout(() => {
        idle = true;
    }, 1000)
    return timer;
}

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    let direction = e.deltaY > 0 ? 'next' : 'prev';
    if (idle && (e.deltaY > 4 || e.deltaY < -4)) {
        changeSlide(direction);
    }
})

allNavs.forEach(nav => nav.addEventListener('click', () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    allSlides.forEach(slide => slide.classList.remove('active'));
    if (nav === aboutNav) {
        aboutNav.classList.add('nav-active');
        activeSlide = slideTwo;
    } else if (nav === projectsNav) {
        projectsNav.classList.add('nav-active');
        activeSlide = slideThree;
    } else if (nav === contactNav) {
        contactNav.classList.add('nav-active');
        activeSlide = slideFive;
    }
    activeSlide.classList.add('active');
    nextSlide = activeSlide.nextElementSibling;
    previousSlide = activeSlide.previousElementSibling;
    changeBackground();
}))

// Mobile

allNavs.forEach(nav => nav.addEventListener('touchend', () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    allSlides.forEach(slide => slide.classList.remove('active'));
    if (nav === aboutNav) {
        aboutNav.classList.add('nav-active');
        activeSlide = slideTwo;
    } else if (nav === projectsNav) {
        projectsNav.classList.add('nav-active');
        activeSlide = slideThree;
    } else if (nav === contactNav) {
        contactNav.classList.add('nav-active');
        activeSlide = slideFive;
    }
    activeSlide.classList.add('active');
    nextSlide = activeSlide.nextElementSibling;
    previousSlide = activeSlide.previousElementSibling;
    changeBackground();
}))

let startDirection;
let moveDirection;

scrollContainer.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDirection = parseInt(e.changedTouches[0].clientX)
})

scrollContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    moveDirection = parseInt(e.changedTouches[0].clientX);
    const delta = moveDirection - startDirection;
    const direction = delta < 0 ? 'next' : 'prev';

    if (idle) {
        changeSlide(direction);
    }
})