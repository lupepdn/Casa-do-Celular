const modal = document.getElementById("assist-modal");
const closeBtn = document.getElementById("closeAssistModal");
const whatsappBtn = document.getElementById("assistWhatsappBtn");

if (modal) {
  setTimeout(() => {
    modal.classList.remove("hidden");
  }, 4000);

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  whatsappBtn.addEventListener("click", () => {
    const name = document.getElementById("assistName").value || "Cliente";
    const service =
      document.getElementById("assistService").value ||
      "assistência técnica";

    const message = `Olá! Meu nome é ${name}. Preciso de ajuda com ${service}.`;

    const url = `https://wa.me/5599999999999?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
}