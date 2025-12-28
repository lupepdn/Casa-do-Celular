import { getProducts } from "./services/productService.js";

export function renderProducts({ condition }) {
  const productList = document.querySelector(".product-list");
  productList.innerHTML = "";

  const products = getProducts();

  const filteredProducts = products.filter(
    product =>
      product.category === "celulares" &&
      product.condition === condition
  );

  filteredProducts.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <img 
        src="${product.image}" 
        alt="${product.name}"
        loading="lazy"
        onerror="this.onerror=null;this.src='assets/placeholder-phone.webp';"
      />

      <h3>${product.name}</h3>
      <p>Marca: ${product.brand}</p>
      <p><strong>Preço:</strong> R$ ${product.price}</p>

      <a 
        href="https://wa.me/5599999999999?text=${encodeURIComponent(
          "Olá! Tenho interesse no " +
          product.name +
          " (" +
          product.condition +
          ")."
        )}"
        target="_blank"
      >
        <button>Chamar no WhatsApp</button>
      </a>
    `;

    productList.appendChild(productDiv);
  });
}