// Initialize AOS animation
AOS.init({once: true});

//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
spaceBetween: 10,
loop: true,
autoplay: {
    delay: 7000,
    disableOnInteraction: false,
},
breakpoints: {
    640: {
    slidesPerView: 2,
    spaceBetween: 20,
    },
    768: {
    slidesPerView: 2,
    spaceBetween: 40,
    },
    1024: {
    slidesPerView: 3,
    spaceBetween: 50,
    },
},
});