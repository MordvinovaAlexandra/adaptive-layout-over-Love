const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  slidesPerView:4,
  breakpoints:{
    255:{
      slidesPerView:1,
    },
    355:{
      slidesPerView:1,
    },
    480:{
      slidesPerView:2,
    },
    789:{
      slidesPerView:3,
    },
    900:{
      slidesPerView:6,
    },
    1500:{
      slidesPerView:7,
    }

  }
});