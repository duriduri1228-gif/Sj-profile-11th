document.addEventListener("DOMContentLoaded", () => {
  // 왼쪽 → 오른쪽 슬라이드용
  const leftElements = document.querySelectorAll(".bbyong-left");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");   // 나타남
      } else {
        entry.target.classList.remove("show"); // 한 번만 보이게 하려면 이 줄 제거
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px"
  });

  leftElements.forEach(el => observer.observe(el));
});