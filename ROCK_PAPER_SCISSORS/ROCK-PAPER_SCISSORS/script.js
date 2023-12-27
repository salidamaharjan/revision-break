const btn = document.querySelector("button");
let result = document.querySelector("span");
btn.addEventListener("click", RPS);
function RPS() {
  console.log(randomIndex(3));
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  const userChoice = prompt("R for ROCK / P for PAPER / S for SCISSORS");
  if (userChoice === null) {
    alert("SEE YOU AGAIN");
    return;
  }
  let userC = userChoice.toUpperCase();
  let ranI = choices[randomIndex(3)];
  console.log(userChoice);

  if (userC === "R" || userC === "P" || userC === "S") {
    alert(ranI);
    if (
      (userC === "R" && ranI === "ROCK") ||
      (userC === "P" && ranI === "PAPER") ||
      (userC === "S" && ranI === "SCISSORS")
    ) {
      result.textContent = "DRAW!";
    } else if (
      (userC === "R" && ranI === "PAPER") ||
      (userC === "S" && ranI === "ROCK") ||
      (userC === "P" && ranI === "SCISSORS")
    ) {
      result.textContent = "I WIN!!";
    } else {
      result.textContent = "YOU WIN!!";
    }
  } else {
    alert("enter R, P or S");
  }
}
function randomIndex(num) {
  let randomI = Math.floor(Math.random() * num);
  return randomI;
}
