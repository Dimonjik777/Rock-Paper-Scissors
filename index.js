
    // Create data
    let choices = ["rock", "paper", "scissors"];
    let result = '';
    let playerScore = 0;
    let computerScore = 0;

    // Take DOM

    const resultDisplay = document.getElementById("result");
    const playerWinsDisplay = document.getElementById("playerWins");
    const computerWinsDisplay = document.getElementById("computerWins");
    const playerChoices = document.querySelectorAll("button");
    const playerChoiceDisplay = document.getElementById("playerChoice");
    const computerChoiceDisplay = document.getElementById("computerChoice");
    
    function startGame(playerChoice){

    playerChoice = choices[playerChoice];

    // make computer choice
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    // check items
    if (playerChoice == computerChoice) {
      result = "It`s a tie!"
    }
    else {
      switch (playerChoice) {

        case "rock":
          result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
          break;

        case "paper":
          result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
          break;

        case "scissors":
          result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
          break;
      }
    }

    if(result == "You Win!"){
      playerScore++;
      resultDisplay.classList.remove("lose");
      resultDisplay.classList.add("win");
    }
    else if(result == "You Lose!"){
      computerScore++;
      resultDisplay.classList.remove("win");
      resultDisplay.classList.add("lose");
    }
    else{
      resultDisplay.classList.remove("win");
      resultDisplay.classList.remove("lose");
    }

    // Display game results

    resultDisplay.textContent = result;

    playerChoiceDisplay.textContent = `Player: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;

    playerWinsDisplay.textContent = `Player wins: ${playerScore}`;
    computerWinsDisplay.textContent = `Computer wins: ${computerScore}`;
  }

playerChoices.forEach(playerChoice => {

  playerChoice.addEventListener("click", event => {

    // Get data-id from button and activate main function
    startGame(event.target.getAttribute("data-id"));

  })
})