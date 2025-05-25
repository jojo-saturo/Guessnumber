let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const userGuess = Number(guessInput.value);
  const message = document.getElementById("message");
  const score = document.getElementById("score");

  if (userGuess < 1 || userGuess > 100) {
    message.textContent = "Please enter number between 1-100";
    return false;
  }

  attempts++;
  score.textContent = "Attempts: " + attempts;

  if (userGuess < randomNumber) {
    message.textContent = "Too low! Try again.";
  } else if (userGuess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = `👌 Correct! The number was ${randomNumber}. You guess it in ${attempts} attempts`;
    guessInput.disabled = true;
    document.getElementById("submitBtn").disabled = true;
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("submitBtn").disabled = false;
  document.getElementById("message").textContent = "";
  document.getElementById("score").textContent = "Attempts: 0";
}
