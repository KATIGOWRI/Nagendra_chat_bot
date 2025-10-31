/* ============================================================
   script.js — Site functionality for Nagendra Portfolio
   ============================================================ */

/* ========== NAV MENU TOGGLE (for mobile view) ========== */
function toggleMenu() {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("show");
}

/* ========== CHAT TOGGLE HANDLER ========== */
function toggleChat() {
  const chatBox = document.getElementById("nk-chat");
  // if chatbot is hidden, open it; otherwise close it
  if (chatBox.classList.contains("hidden")) {
    if (typeof NKChat !== "undefined") NKChat.open();
  } else {
    if (typeof NKChat !== "undefined") NKChat.close();
  }
}

/* ========== EMAIL VALIDATION FOR CONTACT FORM ========== */
function validateEmail(event) {
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i; // improved regex
  if (!pattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    event.preventDefault();
    return false;
  }
  return true;
}

/* ========== SMOOTH SCROLLING FOR NAV LINKS ========== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      window.scrollTo({
        top: targetEl.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

/* ========== AUTO CLOSE MENU ON LINK CLICK (MOBILE UX) ========== */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".nav-links");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
    }
  });
});

/* ========== SMALL ENHANCEMENT: CLOSE CHAT IF ESC PRESSED ========== */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (typeof NKChat !== "undefined") NKChat.close();
  }
});

/* ========== OPTIONAL: GREETING LOG IN CONSOLE ========== */
console.log("👋 Hello! Thanks for checking out Nagendra's portfolio site.");
