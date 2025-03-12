// Horizontal Scrolling
const scrollContent = document.querySelector(".scroll-content");

scrollContent.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContent.scrollBy({
    left: e.deltaY < 0 ? -100 : 100, // Adjust scroll speed
    behavior: "smooth",
  });
});

// Parallax Effect
window.addEventListener("scroll", () => {
  const hero = document.querySelector("#hero");
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust parallax speed
});

// Bubble Hover Effect
const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble) => {
  bubble.addEventListener("mouseenter", () => {
    bubble.style.transition = "all 0.3s ease";
  });

  bubble.addEventListener("mouseleave", () => {
    bubble.style.transition = "all 0.3s ease";
  });
});
