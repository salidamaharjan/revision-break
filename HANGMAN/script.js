const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".btn-next");
const retryBtn = document.querySelector(".btn-retry");
let word = document.querySelector(".guess");
let leftWord = document.querySelector(".word-num");
let scoreNum = document.querySelector(".score-num");
let randomWord;

startBtn.addEventListener("click", hangman);
nextBtn.setAttribute("style", "display: none");
retryBtn.setAttribute("style", "display: none");

function hangman() {
  displayWord();
  nextBtn.addEventListener("click", displayWord);
}
document.addEventListener("keydown", showCorrectLetter);

function showCorrectLetter(e) {
  console.log(randomWord);
  if (randomWord.includes(e.key)) {
    // console.log("pressed key: ", e.key);
    randomWord.split("").forEach((element, index) => {
      if (element === e.key) {
        const letterToDisplay = word.textContent.split("");
        letterToDisplay.splice(index, 1, e.key.toUpperCase());
        // console.log(`index of ${e.key}: `,index);
        word.textContent = letterToDisplay.join("");
        // console.log(word.textContent);
        if (word.textContent.toLowerCase() === randomWord) {
          alert("You got it");
          nextBtn.removeAttribute("style");
        }
        // console.log("after replace: ", word.textContent);
      }
    });
  } else {
    alert("Incorrect Letter");
  }
}

function displayWord() {
  const wordList = [
    "patience",
    "diligent",
    "investment",
    "programmer",
    "success",
  ];
  randomWord = wordList[randomNum(wordList.length)];
  console.log(randomWord);
  word.textContent = "";
  for (let i = 0; i < randomWord.length; i++) {
    word.textContent += "_";
  }
  console.log("no of dash: ", word.textContent.length);
  return word.textContent;
}

function randomNum(num) {
  let ranNum = Math.floor(Math.random() * num);
  return ranNum;
}
