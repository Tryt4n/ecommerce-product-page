import handleNavbar from "./navbar.js";
import handleCarousel from "./carousel.js";
import handleShoppingCart from "./shoppingCart.js";
import handleLightBox from "./lightbox.js";

handleNavbar();
handleCarousel();
handleShoppingCart();
handleLightBox();
window.addEventListener("resize", handleLightBox);
