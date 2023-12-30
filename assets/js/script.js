//testTestimonialSwiper
const a = new Swiper('.testTestimonialSwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//end testTestimonialSwiper


//wow js
new WOW().init();
//end wow js