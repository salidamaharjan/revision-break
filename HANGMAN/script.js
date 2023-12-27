const startBtn = document.querySelector(".btn-start");
let word = document.querySelector(".guess");
startBtn.addEventListener("click", hangman);
function hangman(){
    let words = ["PROGRAMMING", "INVESTMENT", "DILIGENCE", "PATIENCE", "SUCCESS"];
    let ranWord = words[randomNum(words.length)];
    console.log(ranWord);
}
hangman();
function randomNum(num){
    // let letters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let ranNum = Math.floor(Math.random() * num);
    return ranNum;
}