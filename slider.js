const scrollContainer = document.querySelector('#hero-slider');
const slideOne = document.getElementById('slide-one');
const slideTwo = document.getElementById('slide-two');
const slideThree = document.getElementById('slide-three');
const slideFour = document.getElementById('slide-four');
const slideFive = document.getElementById('slide-five');

const aboutNav = document.getElementById('about');
const projectsNav = document.getElementById('projects');
const contactNav = document.getElementById('contact');

const allSlides = document.querySelectorAll('section');
const allNavs = document.querySelectorAll('nav a');

// const activeSlide = document.querySelector('.active');
// const nextSlide = activeSlide.nextElementSibling;
// const previousSlide = activeSlide.previousElementSibling;



let counter = 0;

const animateSlide = () => {
    if (counter >= 0 && counter < 30) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        slideOne.classList.add('active');
    } else if (counter >= 30 && counter < 60) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        slideTwo.classList.add('active');
    } else if (counter >= 60 && counter < 90) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        slideThree.classList.add('active');
    } else if (counter > 90 && counter < 120) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        slideFour.classList.add('active');
    } else if (counter > 120 && counter < 150) {
        allSlides.forEach(slide => slide.classList.remove('active'));
        slideFive.classList.add('active');
    }
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
     } else if (slideThree.classList.contains('active') || slideFour.       classList.contains('active')) {
        projectsNav.classList.add('nav-active');
     } else if (slideFive.classList.contains('active')) {
        contactNav.classList.add('nav-active');
     } else return;

}

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    animateSlide();

    if (e.deltaY < 0) {
        counter -= 1;
    } else counter += 1;

    if (counter < 0) {
        counter = 0;
    } else if (counter > 150) {
        counter = 150;
    }
})

aboutNav.addEventListener('click', () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    aboutNav.classList.add('nav-active');
    allSlides.forEach(slide => slide.classList.remove('active'));
    slideTwo.classList.add('active');
    changeBackground();
    counter = 40;
})

projectsNav.addEventListener('click', () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    projectsNav.classList.add('nav-active');
    allSlides.forEach(slide => slide.classList.remove('active'));
    slideThree.classList.add('active');
    changeBackground();
    counter = 70;
})

contactNav.addEventListener('click', () => {
    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    contactNav.classList.add('nav-active');
    allSlides.forEach(slide => slide.classList.remove('active'));
    slideFive.classList.add('active');
    changeBackground();
    counter = 130;
})

