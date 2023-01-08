let scrollContainer = document.querySelector('.slider-container');

let slides = document.querySelectorAll('.slide');
let slideTwo = document.getElementById('slide-two');
let slideThree = document.getElementById('slide-three');
let slideFour = document.getElementById('slide-four');
let slideFive = document.getElementById('slide-five');

const Navs = document.querySelectorAll('nav ul li');
const Links = document.querySelectorAll('nav ul li a');
const outboundLinks = document.querySelectorAll('.link');

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})

const slideOptions = { threshold: .5 };

slideObserver = new IntersectionObserver(function(entries, slideObserver) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { 
            Navs.forEach(nav => nav.classList.remove('nav-active'));
            if (entry.target == slideTwo) {
                Navs[0].classList.add('nav-active');
            } else if (entry.target == slideThree) {
                Navs[1].classList.add('nav-active');
            } else if (entry.target == slideFour) {
                Navs[1].classList.add('nav-active');
            } else if (entry.target == slideFive) {
                Navs[2].classList.add('nav-active');
            }
        }
    })
}, slideOptions)

slides.forEach(slide => { slideObserver.observe(slide) })


function clickHandler (e) {  
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
}

Links.forEach(link => link.addEventListener('click', clickHandler))
Links.forEach(link => link.addEventListener('touchend', clickHandler))

let startDirection, moveDirection, endDirection;

scrollContainer.addEventListener('touchstart', (e) => {
    startDirection = parseInt(e.changedTouches[0].clientY)
})

scrollContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    moveDirection = parseInt(e.changedTouches[0].clientY);
    let delta = moveDirection - startDirection;
    scrollContainer.scrollLeft += (delta / 10);
})

outboundLinks.forEach(link => link.addEventListener('touchend', (e) => {
    e.preventDefault();
    endDirection = e.changedTouches[0].clientY;
    if (endDirection - startDirection < 2 && endDirection - startDirection > -2) window.location.href = e.target.href;
}))