const startBtn = document.querySelector(".btn-start");
const nextBtn = document.querySelector(".btn-next");
const retryBtn = document.querySelector(".btn-retry");
let word = document.querySelector(".guess");
let leftWord = document.querySelector(".word-num");
let scoreNum = document.querySelector(".score-num");
let randomWord;
let pressedKey = [];

startBtn.addEventListener("click", hangman);
nextBtn.setAttribute("style", "display: none");
retryBtn.setAttribute("style", "display: none");

function hangman() {
  startBtn.setAttribute("style", "display: none");
  displayWord();
  scoreNum.textContent = 0;
  leftWord.textContent = 5;
}

document.addEventListener("keydown", showCorrectLetter);
nextBtn.addEventListener("click", displayWord);
retryBtn.addEventListener("click", hangman);

function showCorrectLetter(e) {
  // console.log(randomWord);
  score(e.key);
  if (randomWord.includes(e.key)) {
    pressedKey.push(e.key);
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
    score(e.key);
    wordLeft(e.key);
  }
  console.log("pressedKeyArr: ", pressedKey);
}

function score(e) {
  if (randomWord.includes(e)) {
    // console.log(scoreNum.textContent);
    console.log(pressedKey);
    if (pressedKey.includes(e)) {
      return scoreNum.textContent;
    }
    return (scoreNum.textContent = parseInt(scoreNum.textContent) + 1);
  }
  return scoreNum.textContent;
}

function wordLeft(e) {
  if (!randomWord.includes(e)) {
    if (leftWord.textContent > 0) {
      return (leftWord.textContent = parseInt(leftWord.textContent) - 1);
    } else {
      alert("Ran out of attempt");
      word.setAttribute("style", "display: none");
      retryBtn.removeAttribute("style");
    }
  }
  return leftWord.textContent;
}

function displayWord() {
  nextBtn.setAttribute("style", "display: none");
  retryBtn.setAttribute("style", "display: none");
  word.removeAttribute("style");
  const wordList = [
    "patience",
    "diligent",
    "investment",
    "programmer",
    "success",
  ];
  pressedKey = [];
  randomWord = wordList[randomNum(wordList.length)];
  console.log(randomWord);
  word.textContent = "";
  for (let i = 0; i < randomWord.length; i++) {
    word.textContent += "_";
  }
  // console.log("no of dash: ", word.textContent.length);
  return word.textContent;
}

function randomNum(num) {
  let ranNum = Math.floor(Math.random() * num);
  return ranNum;
}
