window.addEventListener("load", () => {
  const title = document.querySelector(".title");
  const video = document.querySelector(".hero-video");

  // 글자 쪼개기
  title.querySelectorAll("span").forEach(line => {
    const chars = line.textContent.split("");
    line.textContent = "";
    chars.forEach(ch => {
      const s = document.createElement("span");
      s.textContent = ch;
      if (ch === " ") s.style.width = "0.4em";
      line.appendChild(s);
    });
  });

  const letters = title.querySelectorAll("span span");
  const delay = 120; // 한 글자당 간격(ms)

  // 글자 애니메이션
  letters.forEach((span, i) => {
    span.style.opacity = 0;
    span.style.transform = "translateY(15px)";
    span.style.filter = "blur(6px)";
    span.style.transition = "opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease";

    setTimeout(() => {
      span.style.opacity = 1;
      span.style.transform = "translateY(0)";
      span.style.filter = "blur(0)";
    }, i * delay);
  });

  // 🔹 영상은 중간쯤부터 서서히 또렷해짐
  setTimeout(() => {
    video.style.opacity = 1;
    video.style.filter = "blur(0)";
  }, letters.length * delay / 2);
});