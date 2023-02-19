const cartBtn = document.querySelector("[data-cart-btn]");
const cartContainer = document.querySelector("[data-cart-container]");
const cartCount = document.querySelector("[data-cart-count]");
const quantityInput = document.querySelector("[data-quantity-input]");
const btnPlus = document.querySelector("[data-btn-plus]");
const btnMinus = document.querySelector("[data-btn-minus]");
const addToCartBtn = document.querySelector("[data-add-to-cart-btn]");
const btnCheckout = document.querySelector("[data-btn-checkout]");
const cartInformationEmpty = document.querySelector("[data-cart-information-empty]");
const productThumbnail = document.querySelector("[data-product-main-thumbnail]");
const productName = document.querySelector("[data-product-name]");
const productPrice = document.querySelector("[data-product-price]");
const productWrap = document.querySelector("[data-product-wrap]");
const productTemplate = document.querySelector("[data-product-template]");

const cloneTemplate = productTemplate.content.cloneNode("true");

export default function handleShoppingCart() {
  handleInputChange();
  addProductToCart();
  showCart();
}

let quantityValue = parseInt(quantityInput.value);

function handleInputChange() {
  // adding one to input value
  btnPlus.addEventListener("click", () => {
    quantityValue += 1;
    if (quantityValue <= 99) {
      quantityInput.setAttribute("value", `${quantityValue}`);
    } else {
      quantityInput.setAttribute("value", "99");
    }
  });

  // subtracting one from input value if it's bigger than one
  btnMinus.addEventListener("click", () => {
    quantityValue -= 1;
    if (quantityValue > 0) {
      quantityInput.setAttribute("value", `${quantityValue}`);
    } else {
      quantityInput.setAttribute("value", "0");
      quantityValue = 0;
    }
  });
}

function addProductToCart() {
  addToCartBtn.addEventListener("click", () => {
    // prevent from adding no value
    if (quantityValue === 0) return;

    // prevent from adding multiple times the same product
    const existingProduct = productWrap.querySelector("[data-cart-product-name]");
    if (!existingProduct || existingProduct.textContent !== productName.textContent) {
      productWrap.appendChild(cloneTemplate);
      btnCheckout.classList.remove("hide");
      btnCheckout.removeAttribute("aria-hidden");
      cartInformationEmpty.classList.add("hide");
      cartInformationEmpty.setAttribute("aria-hidden", true);
    }

    // adding value to cart counter icon and update item position
    cartCount.textContent = parseInt(cartCount.textContent) + quantityValue;
    updateProductData(cloneTemplate);

    // reset input value after adding item to cart
    quantityInput.setAttribute("value", 0);
    quantityValue = 0;

    // Handle cart counter icon and hiding it if it's empty
    if (quantityInput.value === "0" && !cartCount.textContent === "0") {
      cartCount.classList.add("hide");
      cartCount.setAttribute("aria-hidden", true);
    } else {
      cartCount.classList.remove("hide");
      cartCount.removeAttribute("aria-hidden");
    }
  });
}

function updateProductData() {
  let cartBtnDeletePosition = document.querySelector("[data-cart-btn-delete-position]");
  let cartProductThumbnail = document.querySelector("[data-cart-product-img]");
  let cartProductName = document.querySelector("[data-cart-product-name]");
  let cartProductPrice = document.querySelector("[data-cart-price]");
  let cartProductQuantity = document.querySelector("[data-cart-quantity]");
  let cartOverallPrice = document.querySelector("[data-cart-overall-price]");

  cartProductThumbnail.setAttribute("src", productThumbnail.getAttribute("src"));
  cartProductThumbnail.setAttribute("alt", productThumbnail.getAttribute("alt"));
  cartProductName.textContent = productName.textContent;
  cartProductPrice.textContent = productPrice.textContent;
  if (addToCartBtn.dataset.product === productName.textContent) {
    cartProductQuantity.textContent = parseInt(cartProductQuantity.textContent) + quantityValue;
  }
  cartOverallPrice.textContent =
    `$` +
    (
      parseFloat(cartProductQuantity.textContent) *
      parseFloat(cartProductPrice.textContent.replace("$", ""))
    ).toFixed(2);

  // removing product from the cart
  if (cartBtnDeletePosition) {
    cartBtnDeletePosition.addEventListener("click", () => {
      productWrap.innerHTML = "";
      btnCheckout.classList.add("hide");
      btnCheckout.setAttribute("aria-hidden", true);

      // updating cart counter
      cartProductQuantity.textContent = parseInt(cartProductQuantity.textContent) - quantityValue;
      cartCount.textContent =
        parseInt(cartCount.textContent) - parseInt(cartProductQuantity.textContent);
      if (cartCount.textContent === "0") {
        cartCount.classList.add("hide");
        cartCount.setAttribute("aria-hidden", true);
        cartInformationEmpty.classList.remove("hide");
        cartInformationEmpty.removeAttribute("aria-hidden");
      }
    });
  }
}

function showCart() {
  cartBtn.addEventListener("click", () => {
    cartContainer.classList.toggle("hide");

    if (cartContainer.classList.contains("hide")) {
      cartContainer.setAttribute("aria-hidden", true);
      cartBtn.setAttribute("aria-expanded", false);
    } else {
      cartContainer.setAttribute("aria-hidden", false);
      cartBtn.setAttribute("aria-expanded", true);
    }
  });
}
