const GOD = "akshay";

function generateRandomNumber(from, to){
  const randomDeicmal = Math.random();
  const randomNumber = Math.floor(randomDeicmal * 100);
  const numberInRange = randomNumber % (to - from + 1);

  return numberInRange + from;
}

function workingGame(playerName, from, to) {
  let number = -1;
  let guess = 0;

  while (number !== guess) {
    number = generateRandomNumber(from, to);
    guess = +prompt("Enter you'r guess :");

    if (playerName === GOD) {
      return true;
    }
  }

  return true;
}

function startGame(from, to) {
  console.log("GAME\nGuess The Number In Range " + from + "-" + to);
  const playerName = prompt("\nEnter You'r Name ");
  const gameResult = workingGame(playerName, from, to);
  if (gameResult) {
    console.log("YOU WON", playerName);
  }
}

startGame(10, 30);
