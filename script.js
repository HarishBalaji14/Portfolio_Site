const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 24);
});
