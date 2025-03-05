let isScrolling = false;

window.addEventListener("scroll", () => {
    if (isScrolling) return;

    isScrolling = true;

    const sections = document.querySelectorAll(".project-section");
    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
        }
    });

    if (closestSection) {
        closestSection.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
        isScrolling = false;
    }, 500); // Adjust timeout to control scroll sensitivity
});