const hamburgerBtn = document.querySelector("[data-hamburger-btn]");
const closeBtn = document.querySelector("[data-close-btn]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const menuListItems = document.querySelectorAll("[data-menu-list-item]");
const btnOutsideMobileMenu = document.querySelectorAll("[data-btn-outside-mobile-menu]");
const body = document.querySelector("body");

export default function handleNavbar() {
  window.addEventListener("load", () => {
    handleAria();
  });

  window.addEventListener("resize", () => {
    handleAria();
    closeMobileMenu();
  });

  window.addEventListener("click", (e) => {
    if (e.target.contains(mobileMenu) && mobileMenu.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
    }
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.getAttribute("aria-expanded") === "true") {
      closeMobileMenu();
    }
  });

  hamburgerBtn.addEventListener("click", () => {
    openMobileMenu();
  });

  closeBtn.addEventListener("click", () => {
    closeMobileMenu();
  });

  btnOutsideMobileMenu.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (mobileMenu.getAttribute("aria-expanded") === "true") closeMobileMenu();
    });
  });
}

function handleAria() {
  if (window.innerWidth > 768) {
    hamburgerBtn.setAttribute("aria-hidden", true);
    closeBtn.setAttribute("aria-hidden", true);
    hamburgerBtn.setAttribute("tabindex", "-1");
    closeBtn.setAttribute("tabindex", "-1");
    mobileMenu.removeAttribute("aria-expanded");
    mobileMenu.removeAttribute("aria-labelledby");
    menuListItems.forEach((item) => item.removeAttribute("tabindex"));
    btnOutsideMobileMenu.forEach((btn) => btn.removeAttribute("tabindex"));
  } else {
    hamburgerBtn.setAttribute("aria-hidden", false);
    hamburgerBtn.setAttribute("tabindex", "0");
    mobileMenu.setAttribute("aria-expanded", false);
    mobileMenu.setAttribute("aria-labelledby", "hamburger-btn");
    menuListItems.forEach((item) => item.setAttribute("tabindex", "-1"));
  }
}

function openMobileMenu() {
  mobileMenu.classList.add("slide-in");
  mobileMenu.setAttribute("aria-expanded", true);
  hamburgerBtn.setAttribute("aria-hidden", true);
  closeBtn.setAttribute("aria-hidden", false);
  menuListItems.forEach((item) => item.removeAttribute("tabindex"));
  body.classList.add("bg-mobile-menu-visible");
  btnOutsideMobileMenu.forEach((btn) => btn.setAttribute("tabindex", "-1"));
}

function closeMobileMenu() {
  mobileMenu.classList.remove("slide-in");
  mobileMenu.setAttribute("aria-expanded", false);
  hamburgerBtn.setAttribute("aria-hidden", false);
  closeBtn.setAttribute("aria-hidden", true);
  menuListItems.forEach((item) => item.setAttribute("tabindex", "-1"));
  body.classList.remove("bg-mobile-menu-visible");
  btnOutsideMobileMenu.forEach((btn) => btn.removeAttribute("tabindex"));
}
