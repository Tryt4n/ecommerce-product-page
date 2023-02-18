const carouselImg = document.querySelectorAll("[data-carousel-img]");
const lightBox = document.querySelector("[data-lightbox]");
const closeBtn = document.querySelector("[data-close-btn-lightbox]");
const lightBoxSection = document.querySelector("[data-lightbox-section]");

export default function handleLightBox() {
  handleAria();
  if (window.innerWidth >= 768 && window.innerHeight > 700) {
    handleSwiperLightBox();
    openLightbox();
    closeLightbox();
  } else return;
}

function openLightbox() {
  carouselImg.forEach((img) =>
    img.addEventListener("click", () => {
      lightBox.showModal();
    })
  );
}
function closeLightbox() {
  closeBtn.addEventListener("click", () => lightBox.close());
}

function handleAria() {
  if (window.innerWidth < 768 || window.innerHeight <= 700) {
    lightBoxSection.setAttribute("aria-hidden", true);
  } else lightBoxSection.removeAttribute("aria-hidden");
}

function handleSwiperLightBox() {
  var swiper = new Swiper(".mySwiper3", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    zoom: true,
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
