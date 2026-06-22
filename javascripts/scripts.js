window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("is-loaded");

  document.querySelectorAll(".location-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-selected");
    });
  });
});
