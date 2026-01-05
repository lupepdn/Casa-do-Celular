const serviceCards = document.querySelectorAll(".assist-card");
const brandModal = document.getElementById("assist-brand-modal");
const closeBrandModal = document.getElementById("closeBrandModal");
const brandButtons = document.querySelectorAll(".brand-options button");

let selectedService = "";

// Clique no serviço
serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    selectedService = card.dataset.service;
    brandModal.classList.remove("hidden");
  });
});

// Fechar modal
closeBrandModal.addEventListener("click", () => {
  brandModal.classList.add("hidden");
});

// Clique na marca
brandButtons.forEach(button => {
  button.addEventListener("click", () => {
    const brand = button.dataset.brand;

    const message = `Olá! Gostaria de orçamento para ${selectedService} em celular ${brand}.`;

    const whatsappUrl = `https://wa.me/5599999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    brandModal.classList.add("hidden");
  });
});