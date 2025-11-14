document.addEventListener("DOMContentLoaded", () => {
  const fadeText = document.querySelector(".fade-text");
  if (!fadeText) return;

  // ✅ 글자마다 span으로 감싸기
  const text = fadeText.textContent;
  fadeText.textContent = "";
  text.split("").forEach(char => {
    const span = document.createElement("span");
    span.textContent = char;
    fadeText.appendChild(span);
  });

  const spans = fadeText.querySelectorAll("span");

  // ✅ 스크롤 시 한 글자씩 색상 변경
  window.addEventListener("scroll", () => {
    const rect = fadeText.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 화면 안에 들어온 비율 계산 (0~1)
    const visible = Math.max(0, Math.min(1, 1 - rect.top / (windowHeight * 0.6)));

    // 전체 글자 중 몇 개까지 색상 변경할지 계산
    const total = spans.length;
    const activeCount = Math.floor(total * visible);

    spans.forEach((span, i) => {
      if (i < activeCount) {
        span.style.color = "#000"; // ✅ 검정색으로 변경
      } else {
        span.style.color = "#c8c8c8"; // ✅ 기본 회색
      }
    });
  });
});