// Theme toggle
document.getElementById("theme-toggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Typewriter effect
const typeTarget = document.querySelector(".typed-text");
const messages = ["Hi, I'm Akhil!", "AI Developer & Full Stack Engineer", "Let’s build together."];
let i = 0, j = 0, current = "", isDeleting = false;
function typeEffect() {
  if (i < messages.length) {
    if (!isDeleting && j <= messages[i].length) {
      current = messages[i].substring(0, j++);
    } else if (isDeleting && j > 0) {
      current = messages[i].substring(0, j--);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) i = (i + 1) % messages.length;
    }
    typeTarget.textContent = current;
    setTimeout(typeEffect, isDeleting ? 60 : 120);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Voice navigation with Annyang
 /* 
  if (annyang) {
    const commands = {
      'go to about': () => document.getElementById('about').scrollIntoView({ behavior: 'smooth' }),
      'go to projects': () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }),
      'go to contact': () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }),
      'go to skills': () => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }),
      'go to education': () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    };

    annyang.addCommands(commands);

    document.getElementById('voiceBtn').addEventListener('click', () => {
      annyang.start({ autoRestart: false, continuous: false });
      alert("Listening... say something like 'go to projects'");
    });
  } else {
    console.warn("Voice recognition not supported in this browser.");
  }
*/