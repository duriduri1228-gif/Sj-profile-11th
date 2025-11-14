document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".about-title.fade");
  if (!title) return;

  const rawHTML = title.innerHTML;

  // 초기 숨김
  title.style.visibility = "hidden";

  // 🟨 1) 로드 시점에 span 미리 생성 (딜레이 원인 제거)
  const parts = rawHTML.split(/(<br\s*\/?>)/g);
  let spanList = [];

  title.innerHTML = "";
  parts.forEach((part) => {
    if (part.match(/<br\s*\/?>/)) {
      title.appendChild(document.createElement("br"));
    } else {
      [...part].forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        span.style.transition = "opacity 0.2s ease";
        spanList.push(span);
        title.appendChild(span);
      });
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateIn();
      } else {
        animateOut();
      }
    });
  }, {
    threshold: 0,
    rootMargin: "0px 0px -20% 0px"
  });

  observer.observe(title);


  // 🟨 2) IN 애니메이션 — span만 건드림
  function animateIn() {
    title.style.visibility = "visible";

    spanList.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = "1";
      }, i * 80);   // 속도 조절 가능
    });
  }

  // 🟨 3) OUT 애니메이션
  function animateOut() {
    spanList.forEach((span, i) => {
      setTimeout(() => {
        span.style.opacity = "0";
      }, i * 40);
    });
  }
});