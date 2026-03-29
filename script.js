const comparisons = document.querySelectorAll(".comparison");

comparisons.forEach((comparison) => {
  const range = comparison.querySelector(".comparison-range");
  const after = comparison.querySelector(".comparison-after");
  const handle = comparison.querySelector(".comparison-handle");

  const updatePosition = (value) => {
    const position = `${value}%`;
    after.style.clipPath = `inset(0 0 0 ${position})`;
    handle.style.left = position;
    comparison.style.setProperty("--comparison-position", position);
  };

  updatePosition(range.value);
  range.addEventListener("input", (event) => updatePosition(event.target.value));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
