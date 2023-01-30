const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    mousewheel: {
      sensitivity: 0.2,
      thresholdDelta: 100,
      forceToAxis: true,
    },

    keyboard: {
        enabled: true,
      },

});


const slides = document.querySelectorAll('.swiper-slide');
const slideTwo = document.getElementById('slide-two');
const slideThree = document.getElementById('slide-three');
const slideFour = document.getElementById('slide-four');
const slideFive = document.getElementById('slide-five');
const navs = document.querySelectorAll('nav ul li');

const slideOptions = { threshold: .5 };

slideObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) { 
            navs.forEach(nav => nav.classList.remove('nav-active'));
            if (entry.target == slideTwo) {
                navs[0].classList.add('nav-active');
            } else if (entry.target == slideThree || entry.target == slideFour) {
                navs[1].classList.add('nav-active');
            } else if (entry.target == slideFive) {
                navs[2].classList.add('nav-active');
            }
        }
    })
}, slideOptions)

slides.forEach(slide => { slideObserver.observe(slide) })
