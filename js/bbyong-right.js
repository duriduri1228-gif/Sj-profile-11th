
document.addEventListener("DOMContentLoaded", () => {
  const rightMotionEls = document.querySelectorAll(".bbyong-right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");   // 화면에 들어오면 등장
      } else {
        entry.target.classList.remove("show"); // 벗어나면 사라짐 (1회만 원하면 이 줄 제거)
      }
    });
  }, {
    threshold: 0.2,              // 20%만 보여도 실행
    rootMargin: "0px 0px -10% 0px"
  });

  rightMotionEls.forEach(el => observer.observe(el));
});
