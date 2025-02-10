function glitchText(element, speed = 50, duration = 500, pulseInterval = 2000) {
  const originalText = element.textContent;
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-";

  function randomizeText() {
    element.textContent = originalText
      .split("")
      .map((char) =>
        Math.random() > 0.5
          ? chars[Math.floor(Math.random() * chars.length)]
          : char
      )
      .join("");
  }

  function startGlitch() {
    let elapsed = 0;
    const interval = setInterval(() => {
      if (elapsed >= duration) {
        clearInterval(interval);
        element.textContent = originalText; // Reset the text back to original
      } else {
        randomizeText(); // Apply random characters
        elapsed += speed;
      }
    }, speed);
  }

  setInterval(startGlitch, pulseInterval); // Repeat glitch every few seconds (pulseInterval)
}

glitchText(document.getElementById("glitch-text"));
