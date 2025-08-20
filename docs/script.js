const texts = ["Web Designer", "Front-End Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  let currentText = texts[index];
  let typingElement = document.getElementById("typing");

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  }
  setTimeout(type, isDeleting ? 100 : 150);
}
type();

const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

const darkStyle = document.createElement("style");
darkStyle.innerHTML = `
  body.dark-mode { background: #111; color: #fff; }
  body.dark-mode .navbar { background: #111; }
  body.dark-mode .nav-links li a { color: #fff; }
  body.dark-mode .social-links a { border-color: #fff; color: #fff; }
  body.dark-mode .btn { border-color: #fff; color: #fff; }
  body.dark-mode footer { background: #000; }
  body.dark-mode .project { background: #222; color: #fff; }
`;
document.head.appendChild(darkStyle);
