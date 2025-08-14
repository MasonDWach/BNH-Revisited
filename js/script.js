
    let playerCharacter = null;
    let computerCharacter = null;
    let choiceArray = ["Bear", "Ninja", "Hunter"];
    let playerWins = 0;
    let computerWins = 0;
    const resultsBox = document.getElementById("results-box");
    const scoreboard = document.getElementById("scoreboard");
    const playAgainContainer = document.getElementById("playAgainContainer");
    const buttonHeader = document.getElementById("buttonHeader");

    
    // Function to store player's choice
    function storeChoice(choice) {
      playerCharacter = choice;
      document.getElementById("playerCharacter").textContent = `You chose: ${playerCharacter}.`;
      computerChoice();
    }

    // Function to get computer's choice
    function computerChoice() {
      let randomIndex = Math.floor(Math.random() * choiceArray.length);
      computerCharacter = choiceArray[randomIndex];
      document.getElementById("computerCharacter").textContent = `The computer chose: ${computerCharacter}`;
      determineWinner();
    }

    // Function to determine the winner
    function determineWinner() {
    if (computerCharacter === "Bear") {
      switch (playerCharacter) {
        case "Bear":
          outcome = "It's a tie!";
          break;
        case "Ninja":
          outcome = "The computer wins!";
          computerWins++;
          updateComputerWins();
          break;
        case "Hunter":
          outcome = "You win!";
          playerWins++;
          updatePlayerWins();
          break;
      }
    }
    else if (computerCharacter === "Ninja") {
      switch (playerCharacter) {
        case "Bear":
          outcome = "You win!";
          playerWins++;
          updatePlayerWins();
          break;
        case "Ninja":
          outcome = "It's a tie!";
          break;
        case "Hunter":
          outcome = "The computer wins!";
          computerWins++;
          updateComputerWins();
          break;
      }
    }
    else if (computerCharacter === "Hunter") {
      switch (playerCharacter) {
        case "Bear":
          outcome = "The computer wins!";
          computerWins++;
          updateComputerWins();
          break;
        case "Ninja":
          outcome = "You win!";
          playerWins++;
          updatePlayerWins();
          break;
        case "Hunter":
          outcome = "It's a tie!";
          break;
      }
    }

    document.getElementById("roundResult").textContent = outcome;
    scoreboard.classList.remove("hidden");
    resultsBox.classList.remove("hidden");
    playAgainContainer.classList.remove("hidden");
    buttonHeader1.classList.remove("hidden");
    buttonHeader2.classList.remove("hidden");
    }

    // Function to uddate computer wins
    function updateComputerWins() {
      document.getElementById("computerWins").textContent = "Computer Wins: " + computerWins;
    }

    function updatePlayerWins() {
      document.getElementById("playerWins").textContent = "Player Wins: " + playerWins;
    }

    // Function to play again
    function playAgain() {
      scoreboard.classList.add("hidden");
      resultsBox.classList.add("hidden");
      playAgainContainer.classList.add("hidden");
      buttonHeader1.classList.add("hidden");
      buttonHeader2.classList.add("hidden");
    }
