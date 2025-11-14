document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".bbyong");

  // IntersectionObserver 설정
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");   // 화면에 들어오면 show 클래스 추가
      } else {
        entry.target.classList.remove("show"); // 벗어나면 다시 숨김 (한 번만 보이게 하려면 이 줄 삭제)
      }
    });
  }, {
    threshold: 0.2,  // 요소가 20% 보이면 실행
    rootMargin: "0px 0px -10% 0px"
  });

  targets.forEach(el => observer.observe(el));
  document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".bbyong");

  // 옵저버가 대상 감시
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  targets.forEach((el) => observer.observe(el));
});
});