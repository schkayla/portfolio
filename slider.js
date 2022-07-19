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

    activeSlide.classList.remove('active');
    if (direction === 'next' && nextSlide !== null) {
        activeSlide = nextSlide;
    } else if (direction === 'prev' && previousSlide !== null) {
        activeSlide = previousSlide;
    } else activeSlide.classList.add('active');
    
    activeSlide.classList.add('active');
    previousSlide = activeSlide.previousElementSibling;
    nextSlide = activeSlide.nextElementSibling;

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

const onNavClick = (e) => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    allSlides.forEach(slide => slide.classList.remove('active'));

    if (e.target === aboutNav) {
        activeSlide = slideTwo;
    } else if (e.target === projectsNav) {
        activeSlide = slideThree;
    } else if (e.target === contactNav) {
        activeSlide = slideFive;
    }

    activeSlide.classList.add('active');
    nextSlide = activeSlide.nextElementSibling;
    previousSlide = activeSlide.previousElementSibling;
    changeNavActive();
    changeBackground();
}

allNavs.forEach(nav => nav.addEventListener('click', onNavClick))
allNavs.forEach(nav => nav.addEventListener('touchend', onNavClick))


let startDirection;
let moveDirection;

scrollContainer.addEventListener('touchstart', (e) => {
    e.preventDefault();
    startDirection = parseInt(e.changedTouches[0].clientX)
    // window.scrollTop = 0;
})

scrollContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    moveDirection = parseInt(e.changedTouches[0].clientX);
    let delta = moveDirection - startDirection;
    // window.scrollTop = 0;

    if (idle) {
        let directionMobile = delta < 0 ? 'next' : 'prev';
        changeSlide(directionMobile);
    }
})