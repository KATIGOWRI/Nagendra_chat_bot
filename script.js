// ------------------- NAVBAR TOGGLE -------------------
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('show');
}

// ------------------- EMAIL VALIDATION -------------------
function validateEmail(event) {
  const email = document.getElementById('email').value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!pattern.test(email)) {
    alert('❌ Please enter a valid email address.');
    event.preventDefault();
    return false;
  }
  return true;
}

// ------------------- CONTACT FORM ANIMATION -------------------
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('.contact-form');
  if (form) setTimeout(() => form.classList.add('visible'), 200);
});

// ------------------- CHATBOT TOGGLE -------------------
function toggleChat() {
  const chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('hidden');
}

// Optional: Close mobile menu on link click
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('show');
  });
});
