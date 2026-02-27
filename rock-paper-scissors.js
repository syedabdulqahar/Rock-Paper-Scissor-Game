let gameMoves = document.querySelector(".Moves-div");
let ScoreCard = document.querySelector(".ScoreCard");
let score = {
  win: 0,
  loss: 0,
  tie: 0,
};
function PlayGame(playerMove) {
  let result = "";
  let ComputerMove = ComputerMoveFunction();
  if (playerMove === "Rock") {
    if (ComputerMove === "Rock") {
      result = "Tie";
    } else if (ComputerMove === "Paper") {
      result = "Loss";
    } else if (ComputerMove === "Scissor") {
      result = "Win";
    }
  } else if (playerMove === "Paper") {
    if (ComputerMove === "Rock") {
      result = "Win";
    } else if (ComputerMove === "Paper") {
      result = "Tie";
    } else if (ComputerMove === "Scissor") {
      result = "Loss";
    }
  } else if (playerMove === "Scissor") {
    if (ComputerMove === "Rock") {
      result = "Loss";
    } else if (ComputerMove === "Paper") {
      result = "Win";
    } else if (ComputerMove === "Scissor") {
      result = "Tie";
    }
  }

  if (result === "Win") {
    score.win += 1;
  } else if (result === "Loss") {
    score.loss += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }

  ScoreCard.innerHTML = `Wins  = <span class="score "> ${score.win}</span > | Losses = <span class="score ">${score.loss}</span>  | Ties = <span class="score ">${score.tie}</span> `;
  Location.setItem(
    "gameMoves1",
    JSON.stringify(
      (gameMoves.innerHTML = `<span class="player">Your</span> Move : <img class="move-icon" src="./images/${playerMove}.png" alt="${playerMove}">    <img class="move-icon" src="./images/${ComputerMove}.png" alt="${ComputerMove}"> : <span class="player">Computer</span> Move`),
    ),
  );

  localStorage.setItem("moves", JSON.stringify(gameMoves.innerHTML));
  // alert(`  wins :  ${score.win} loses : ${score.loss}  ties : ${score.tie}`);
}
JSON.parse(localStorage.getItem("gameMoves1"));

function ComputerMoveFunction() {
  let randomNumber = Math.random();
  let result = "";
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    result = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
    result = "Paper";
  } else if (randomNumber > 2 / 3 && randomNumber <= 1) {
    result = "Scissor";
  }
  return result;
}
