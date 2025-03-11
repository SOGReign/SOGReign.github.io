const scrollContent = document.querySelector(".scroll-content");

scrollContent.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContent.scrollBy({
    left: e.deltaY < 0 ? -100 : 100, // Adjust scroll speed
    behavior: "smooth",
  });
});
