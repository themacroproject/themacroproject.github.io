(function() {
  const swiper = new Swiper('.wp-block-copia-gutenberg-blocks-copia-reviews .swiper', {
    speed: 400,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
  
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
    breakpoints: {
      // when window width is >= 320px
      320: {
        spaceBetween: 24
      },
      // when window width is >= 480px
      480: {
        spaceBetween: 16
      }
    }
  });

  const logosSwiper = new Swiper('.swiper.logos', {
        spaceBetween: 40,
        speed: 2500,
        loop: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 48
          },
          950: {
            slidesPerView: 5.5,
            spaceBetween: 20,
            centeredSlides: "true",
          }
        },
      }
  );

  const cardsSwiper = new Swiper('.swiper.cards', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 16,
      }
    }
  });

})();
