const scrollContent = document.querySelector(".scroll-content");

scrollContent.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContent.scrollBy({
    left: e.deltaY < 0 ? -100 : 100, // Adjust scroll speed
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector("#hero");
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Adjust parallax speed
});
