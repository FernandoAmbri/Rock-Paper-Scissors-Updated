function rpsGame(yourOption) {
  const humanChoice = yourOption.id;
  const computerChoice = getComputerChoice();
  const result = decideWinner(humanChoice, computerChoice);
  const finalMessage = getMessage(result);
  rpsFrontend(humanChoice, computerChoice, finalMessage);
}

function getComputerChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function decideWinner(playerOption, computerOption) {
  const rpsData = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };
  const yourScore = rpsData[playerOption][computerOption];
  const computerScore = rpsData[computerOption][playerOption];
  return [yourScore, computerScore];
}

function getMessage([playerScore]) {
  return playerScore === 0
    ? { message: "You lost!", color: "red" }
    : playerScore === 0.5
    ? { message: "You tied!", color: "yellow" }
    : { message: "You won!", color: "green" };
}

function rpsFrontend(playerImageChoice, computerImageChoice, message) {
  const imageData = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
  //Adding divs
  const humanChoiceDiv = document.createElement("div");
  const computerChoiceDiv = document.createElement("div");
  const messageDiv = document.createElement("div");
  //Create image
  const humanImageChoice = document.createElement("img");
  humanImageChoice.src = imageData[playerImageChoice];
  humanImageChoice.style =
    "width: 150px; height: 150px; box-shadow: 0 10px 50px rgba(37, 50, 233, 1);";
  //adding the image to the div
  humanChoiceDiv.appendChild(humanImageChoice);
  //Create message and append to the div
  const messageResult = document.createElement("h1");
  messageResult.style = `color: ${message["color"]}; font-size: 60px; padding: 30px;`;
  messageResult.textContent = message["message"];
  messageDiv.appendChild(messageResult);

  const computerImage = document.createElement("img");
  computerImage.src = imageData[computerImageChoice];
  computerImage.style =
    "width: 150px; height: 150px; box-shadow: 0 10px 50px rgba(255, 38, 24, 1);";
  computerChoiceDiv.appendChild(computerImage);

  document.getElementById("flex-box-rps-div").appendChild(humanChoiceDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(computerChoiceDiv);
}
