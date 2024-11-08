const inputText = document.querySelector("#text");
const timeEl = document.querySelector(".time");
let count = 60;
let text = ''
inputText.addEventListener("input", () => {
  const interval = setInterval(() => {
    timeEl.textContent = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      inputText
    }
  }, 1000);
  
});
