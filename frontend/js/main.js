import { getProducts } from "./services/productService.js";

const productList = document.querySelector(".product-list");

function renderProducts() {
  const products = getProducts();

  products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Marca: ${product.brand}</p>
      <p>Preço: R$ ${product.price}</p>
      <button>Chamar no WhatsApp</button>
    `;

    productList.appendChild(productDiv);
  });
}

renderProducts();
