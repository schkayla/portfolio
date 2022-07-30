let scrollContainer = document.querySelector('.slider-container');

let slideTwo = document.getElementById('slide-two');
let slideThree = document.getElementById('slide-three');
let slideFive = document.getElementById('slide-five');

const allNavs = document.querySelectorAll('nav a');
const outboundLinks = document.querySelectorAll('.link');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})

function clickHandler (e) {  
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });

    allNavs.forEach(nav => nav.classList.remove('nav-active'));
    e.target.classList.add('nav-active');
}

allNavs.forEach(nav => nav.addEventListener('click', clickHandler))
allNavs.forEach(nav => nav.addEventListener('touchend', clickHandler))

let startDirection, moveDirection, endDirection;

scrollContainer.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    startDirection = parseInt(e.changedTouches[0].clientX)
})

scrollContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    moveDirection = parseInt(e.changedTouches[0].clientX);
    let delta = moveDirection - startDirection;
    scrollContainer.scrollLeft += delta;
})

outboundLinks.forEach(link => link.addEventListener('touchend', (e) => {
    e.preventDefault();
    endDirection = e.changedTouches[0].clientX;
    if (endDirection - startDirection < 3 && endDirection - startDirection > -3) window.location.href = e.target.href;
}))