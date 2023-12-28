const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".btn-next");
const retryBtn = document.querySelector(".btn-retry");
let word = document.querySelector(".guess");
let leftWord = document.querySelector(".word-num");
let scoreNum = document.querySelector(".score-num");

leftWord.textContent = 5;
scoreNum.textContent = 0;
let count = 0;

nextBtn.setAttribute("style", "display: none");
retryBtn.setAttribute("style", "display: none");
nextBtn.addEventListener("click", hangman);
retryBtn.addEventListener("click", () => {location.reload()});

word.setAttribute("style", "display: none");
startBtn.addEventListener("click", hangman);
function hangman() {
  word.removeAttribute("style");
  let words = ["PROGRAMMING", "INVESTMENT", "DILIGENCE", "PATIENCE", "SUCCESS"];
  let enteredLetter = [];
  let ranWord = words[randomNum(words.length)].toLowerCase();
  console.log(ranWord);
  word.textContent = "";
  for (let i = 0; i < ranWord.length; i++) {
    word.textContent += "_";
  }
  //   console.log(word.textContent.length);
  document.addEventListener("keydown", (e) => {
    // console.log("before if", e.key);
    // console.log(ranWord.includes(e.key));
    if (ranWord.includes(e.key)) {
      //   console.log(ranWord.indexOf(e.key));
      let i = -1;
      let indexes = [];
      while (((i = ranWord.indexOf(e.key, i + 1)), i !== -1)) {
        // console.log("while loop", ranWord.indexOf(e.key));
        indexes.push(i);
        if (!enteredLetter.includes(e.key)) {
          enteredLetter.push(ranWord[i]);
          count += 1;
          scoreNum.textContent = count;
        }
      }
      console.log(enteredLetter);
      console.log("count", count);

      let guessWord = word.textContent.split("");
      console.log(guessWord.length);
      indexes.forEach((index) => {
        guessWord.splice(index, 1, e.key.toUpperCase());
      });
      word.textContent = guessWord.join("");
      console.log(word.textContent, ranWord);
    } else {
      leftWord.textContent -= 1;

      alert("Letter not found");
    }
    if (word.textContent === ranWord.toUpperCase()) {
      alert("You got it right");
      nextBtn.removeAttribute("style");
    } else {
      if (leftWord.textContent < 1) {
        alert("Out of attempt");
        retryBtn.removeAttribute("style");
        nextBtn.setAttribute("style", "display: none");
        return;
      }
    }
  });
  console.log(enteredLetter);
}

function randomNum(num) {
  let ranNum = Math.floor(Math.random() * num);
  return ranNum;
}
