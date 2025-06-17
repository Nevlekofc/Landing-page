// Menu mobile responsivo
const menuBtn = document.getElementById("menu-btn")
const navMenu = document.getElementById("nav-menu")

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open")
  menuBtn.classList.toggle("active")
});

// Fecha o menu ao clicar em um link (mobile)

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    if(window.innerWidth <= 700) {
      navMenu.classList.remove("open")
      menuBtn.classList.remove("active")
    }
  });
});

// Animação suave no scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 65,
        behavior: 'smooth'
      });
    }
  });
});
// Formulário de contato fake submit
const form = document.getElementById("contact-form")
const formSuccess = document.getElementById("form-success")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  formSuccess.style.display = "block";
  form.reset();
  setTimeout(() => {
    formSuccess.style.display = "none";
  }, 4000);
});

//perguntas frequentes
function toggleFAQ(el) {
  el.classList.toggle('active')
}