import handleNavbar from "./navbar.js";

handleNavbar();

var swiper = new Swiper(".mySwiper", {
  // Ilość slide'ów na stronie (nic nie podawać jako default kiedy są ustawione breakpointy)
  slidesPerView: 1,

  // Odstęp pomiędzy elementami
  spaceBetween: 0,

  // Ustawia czy carousel jest zapętlona
  loop: true,

  // Ustawia możliwość przesuwania zdjęć dowolnie (nie trzeba przesunąć całego zdjęcia tylko można np 30% i tylko 30% będzie wtedy widoczne)
  // freeMode: true,

  // Pozwala robić zoom, najlepiej wtedy usunąć całkowicie spaceBetween (wymaga umieszczenia w dodatkowym kontenerze)
  // zoom: true,

  // Pozwala na przesuwanie strzałkami
  keyboard: {
    enabled: true,
  },

  // Ustawia hash, trzeba dodać data-hash="tekst" do elementu z klasą "swiper-slide" (hash czyli w adresie URL pojawia się # a po nim tekst, który wpisaliśmy), AUTOMATYCZNIE DODAJE HISTORIE
  hashNavigation: {
    watchState: true,
  },

  // Ustawia historię wymaga dodania data-history do elementu z klasą "swiper-slide"
  // history: {
  //   key: "slide",
  // },

  // BUTTON NAVIGATION
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
