const menuToggle = document.querySelector(".menu-toggle");
const brand = document.querySelector(".brand");
const form = document.querySelector(".contact-form");

function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
}

menuToggle?.addEventListener("click", () => {
  setMenu(!document.body.classList.contains("menu-open"));
});

brand?.addEventListener("click", () => {
  setMenu(false);
  document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    event.preventDefault();
    setMenu(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = form.querySelector("button");
  if (!button) return;

  button.textContent = "Request received";
  button.disabled = true;
});
