export default function handleCarousel() {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    hashNavigation: {
      watchState: true,
    },
    keyboard: {
      enabled: true,
    },
  });
}
