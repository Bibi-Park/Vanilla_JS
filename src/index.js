// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
function resizeColorChange() {
  let intViewportWidth = window.innerWidth;

  if (intViewportWidth < 800) {
    document.body.style.backgroundColor = "#819FF7";
  } else if (intViewportWidth >= 800 && intViewportWidth <= 1300) {
    document.body.style.backgroundColor = "#9F81F7";
  } else {
    document.body.style.backgroundColor = "#F7D358";
  }
}

window.addEventListener("resize", resizeColorChange);
