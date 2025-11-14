document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector(".about");
  const blurTarget = document.querySelector(".about-title");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          blurTarget.classList.add("blur-active");
        } else {
          blurTarget.classList.remove("blur-active");
        }
      });
    },
    {
      threshold: 0.4, // 40% 이상 보일 때 트리거
    }
  );

  if (aboutSection) observer.observe(aboutSection);
});