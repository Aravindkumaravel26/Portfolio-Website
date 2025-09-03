const typed = new Typed(".typing", {
  strings: ["Aravind K", "Full Stack Developer", "Python Enthusiast", "Flask & Django Dev"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

const toggleBtn = document.getElementById("toggle-mode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (name.length < 3) {
    showToast("Please enter a valid name (at least 3 characters).");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    showToast("Please enter a valid email address.");
    return;
  }

  if (message.length < 10) {
    showToast("Your message should be at least 10 characters.");
    return;
  }

  showToast("Message sent successfully!");
  form.reset();
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #00b894;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 16px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    z-index: 999;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}
