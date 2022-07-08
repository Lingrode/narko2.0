const audio = document.querySelector("audio");
const btn = document.querySelector(".volume-play");
const high = document.querySelector(".high");
const mute = document.querySelector(".mute");
function toggleAudio() {
  audio.volume = 0.25;
  if (audio.paused) {
    audio.play();
    high.style.display = "block";
    mute.style.display = "none";
  } else {
    audio.pause();
    high.style.display = "none";
    mute.style.display = "block";
  }
}
btn.addEventListener("click", toggleAudio);
