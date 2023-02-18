const cartCount = document.querySelector("[data-cart-count]");
const quantityInput = document.querySelector("[data-quantity-input]");
const btnPlus = document.querySelector("[data-btn-plus]");
const btnMinus = document.querySelector("[data-btn-minus]");
const addToCartBtn = document.querySelector("[data-add-to-cart-btn]");

export default function handleShoppingCart() {
  handleInputChange();
  changeCartCounter();
}

let quantityValue = parseInt(quantityInput.value);

function handleInputChange() {
  btnPlus.addEventListener("click", () => {
    quantityValue += 1;
    if (quantityValue <= 99) {
      quantityInput.setAttribute("value", `${quantityValue}`);
    } else {
      quantityInput.setAttribute("value", "99");
    }
  });

  btnMinus.addEventListener("click", () => {
    quantityValue -= 1;
    if (quantityValue >= 0) {
      quantityInput.setAttribute("value", `${quantityValue}`);
    } else {
      quantityInput.setAttribute("value", "0");
    }
  });
}

function changeCartCounter() {
  addToCartBtn.addEventListener("click", () => {
    cartCount.textContent = parseInt(cartCount.textContent) + quantityValue;
    if (quantityInput.value === "0") {
      cartCount.classList.add("hide");
      cartCount.setAttribute("aria-hidden", true);
    } else {
      cartCount.classList.remove("hide");
      cartCount.removeAttribute("aria-hidden");
    }
  });
}
