import handleNavbar from "./navbar.js";
import handleCarousel from "./carousel.js";
import handleLightBox from "./lightbox.js";

handleNavbar();
handleCarousel();
handleLightBox();
window.addEventListener("resize", handleLightBox);
