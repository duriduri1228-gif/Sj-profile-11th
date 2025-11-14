document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-box .desc");

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        } else {
          entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(20px)";
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -15% 0px",
    }
  );

  items.forEach((item) => obs.observe(item));
});