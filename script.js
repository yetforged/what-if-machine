// script.js
const responses = [
  "Brain.exe has stopped working.",
  "Reality denied your request.",
  "404: Logic not found.",
  "Even Google is confused.",
  "Try again. But smarter.",
  "Your brain just rage quit.",
  "That thought got flagged.",
  "The universe facepalmed.",
  "Elon Musk just blocked you.",
  "Even your shadow left.",
  "You just confused AI.",
  "Bro, just uninstall.",
  "The Matrix wants a refund.",
  "IQ dropped to single digits.",
  "Even your horoscope said no.",
  "NASA can’t explain this one.",
  "Not even a magic 8-ball knows.",
  "A wormhole just swallowed that.",
  "Your Wi-Fi is stronger than this idea.",
   "That was deep. Like a puddle.",
  "The simulation is lagging now.",
  "Even time travelers skipped this.",
  "Logic has left the chat.",
  "Try turning your brain off and on.",
  "A black hole just cringed.",
  "Even ChatGPT won’t process that.",
  "The universe just muted you.",
  "You confused yourself, didn’t you?",
  "That belongs in the void."

];

document.getElementById("askButton").addEventListener("click", () => {
  const soundEffect = document.getElementById("soundEffect");
  soundEffect.play();

  const responseText = document.getElementById("responseText");
  responseText.classList.remove("typing-animation"); // Reset animation
  setTimeout(() => {
    responseText.classList.add("typing-animation");
  }, 10);

  const question = document.getElementById("questionInput").value;
  if (question.trim() === "") {
    alert("Please ask a question!");
    return;
  }
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  responseText.textContent = randomResponse;

  // Trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Background music
window.onload = function () {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
};

// Randomize shape positions
const shapes = document.querySelectorAll(".shape");
shapes.forEach((shape) => {
  const randomTop = Math.random() * 100;
  const randomLeft = Math.random() * 100;
  shape.style.top = `${randomTop}%`;
  shape.style.left = `${randomLeft}%`;
});

document.getElementById("askButton").addEventListener("click", () => {
  const responseText = document.getElementById("responseText");

  // Reset animation
  responseText.classList.remove("typing-animation");
  void responseText.offsetWidth; // Trigger reflow to restart animation
  responseText.classList.add("typing-animation");

  const question = document.getElementById("questionInput").value;
  if (question.trim() === "") {
    alert("Please ask a question!");
    return;
  }

  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  responseText.textContent = randomResponse;
});