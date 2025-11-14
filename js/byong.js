function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

function getContentByBr(element) {
  const contentArray = element.innerHTML
    .split(/<br\s*\/?>/i)
    .map(item => item.trim())
    .filter(item => item);
  return contentArray;
}

function getFontStyles(element) {
  const computedStyle = window.getComputedStyle(element);
  let lineHeight = computedStyle.lineHeight;

  if (lineHeight === 'normal') {
    const fontSizeValue = parseFloat(computedStyle.fontSize);
    lineHeight = `${fontSizeValue * 1.2}px`;
  }
  return { lineHeight };
}

document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".bbyong");

  if (tags.length) {
    tags.forEach(tag => {
      let resultContent = "";
      const textArray = getContentByBr(tag);
      const { lineHeight } = getFontStyles(tag);

      // ✅ span 기본 스타일 (font-size 미고정)
      const defaultStyles = {
        display: 'inline-block',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingTop: lineHeight,
        transition: 'all 0.8s ease',
        opacity: 0,
      };

      // ✅ <br> 기준으로 줄 나누기
      for (let i = 0; i < textArray.length; i++) {
        resultContent += `<span style="transition-delay:${0.1 * i}s">${textArray[i]}</span>`;
        if (i !== textArray.length - 1) resultContent += `<br>`;
      }

      tag.innerHTML = resultContent;

      // ✅ 각 줄에 기본 상태 적용
      Array.from(tag.children).forEach(child => {
        Object.assign(child.style, defaultStyles);
      });
    });
  }

  // ✅ IntersectionObserver (부드러운 슬라이드 + 반응형 폰트 유지)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        Array.from(entry.target.children).forEach(child => {
          Object.assign(child.style, {
            paddingTop: 0,
            opacity: 1,
          });
        });
      } else {
        // 다시 나갈 때 원상복귀
        Array.from(entry.target.children).forEach(child => {
          const { lineHeight } = getFontStyles(entry.target);
          Object.assign(child.style, {
            paddingTop: lineHeight,
            opacity: 0.3,
          });
        });
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -10% 0px",
  });

  tags.forEach(element => observer.observe(element));
});