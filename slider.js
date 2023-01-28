const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    mousewheel: {
      sensitivity: 0.2,
      thresholdDelta: 100,
    },

  });

