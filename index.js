const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    centeredSlides: true,
    keyboard: { enable: true },
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

    breakpoints: {

       640: {
          slidesPerView: 1,
          spaceBetween: 20,

        },
        728: {
          slidesPerView: 1,
          spaceBetween: 40,
        
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },

    },
});