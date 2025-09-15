// Año dinámico
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Formulario de contacto (demo sin backend)
const form = document.getElementById('contact-form');
if (form) {
form.addEventListener('submit', (e) => {
e.preventDefault();
const status = document.getElementById('form-status');
if (status) status.textContent = '¡Gracias por tu mensaje! 🙌 (Demo: conecta un backend cuando quieras)';
form.reset();
});
}