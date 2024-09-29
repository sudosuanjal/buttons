document.addEventListener("DOMContentLoaded", () => {
  const soundToggle = document.getElementById("soundToggle");
  const soundState = document.getElementById("soundState");
  const soundIcon = document.querySelector(".sound-icon");
  let isSoundOn = true;

  soundToggle.addEventListener("click", (e) => {
    e.preventDefault();
    isSoundOn = !isSoundOn;

    if (isSoundOn) {
      soundState.textContent = "On";
      soundIcon.textContent = "📢";
    } else {
      soundState.textContent = "Off";
      soundIcon.textContent = "🙊";
    }
  });
});
