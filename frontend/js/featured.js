import { getProducts } from "./services/productService.js";

const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const featuredProducts = getProducts().filter(p => p.featured);

featuredProducts.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>R$ ${product.price}</p>
    <a href="https://wa.me/5599999999999" target="_blank">
      <button>Chamar no WhatsApp</button>
    </a>
  `;

  track.appendChild(card);
});

nextBtn.addEventListener("click", () => {
  track.scrollLeft += 300;
});

prevBtn.addEventListener("click", () => {
  track.scrollLeft -= 300;
});