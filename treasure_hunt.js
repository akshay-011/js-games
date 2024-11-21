// TODO: name changes, later

const gameName = "SOMETHING";
const QUOTE1 = '\n"A game for those who seek to find a way to leave their world behind .・✫・゜・。..・。.・゜✭・"\n';
const QUOTE2 = "\n\n'Do not begin unless you intend to finish otherwise You'll get the curse of Jumanji'\n";
const QUOTE_ONE_PIECE = "\n\n'It is not the wealth but maybe, the friends we made all along, is the real treasure'\n";

const easyQuestion1 = "I killed an entire race of creatures, what am i ?";
const easyQuestion2 = "I am an indian mathematician born on 476 AD, who am i ?";
const mediumQuestion1 = "The record good & bad moments ? what am i ?";
const hardQuestion1 = "I am the expensive thing humans made !, what am i ?";

const easyQue1Answer = "asteroid";
const easyQue2Answer = "aryabhatta";
const mediumQue1Answer = "something";
const hardQue1Answer = "ISS";

// sub puzzless
const puzzle1 = "Your finger has the power!";
const puzzle2 = "ESTIMATE the EMPLOYEES IPHONE of ARGUMENTS by TROY-SINGHAM";
const subPuzzle3 = "i am under the sun and above the rainbow";
const subPuzzle4 = "";

const puzzleSolution1 = "energy";
const puzzleSolution2 = "smart";
const puzzleSolution3 = "";
const puzzleSolution4 = "";

const description = `
You might think this floor of thoughtworks is nothing special.
But... Right in this floor lies a powerful artifact!💎

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⋆ ˚｡⋆ ˚｡⋆ ˚｡⋆ ˚｡⋆୨୧˚ The STEPSUS PRISM ˚୨୧⋆｡˚ ⋆｡˚ ⋆｡˚ ⋆｡˚ ⋆!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

It is the prism that connects all the step interns of different multiverses👥. 
Players must race across countless worlds🗺️, solving challenges🔎😎 in each universe, 
to find the artifact before dark forces😈🧿 use it to merge the multiverses into chaos😱.`

const WRONG_ANSWER = "❌ Ouch i guess you haven't cracked the hint !!";
const CORRECT_ANSWER = "🥳 You got it moving on to next question! Hang on\n\n";
const heading = "♛┈┈┈┈✨┈┈⛧┈┈┈•༶┈•༶💫STEP-10 ACROSS THE STEPVERSE💫༶•┈༶•┈┈⛧┈┈✨┈┈┈┈♛";
const LEVEL_PASSED = "Woohoo! You've finished your quest in this universe! Moving on to the next one!";

function greetPlayer() {
  console.log(QUOTE1);
  console.log(description);
  console.log(QUOTE2);

  confirm("Shall we start the game ? ");
  console.log("Regardless what do you want we are already started !\n\n");
}

function greetForPassing() {
  console.log("🎉 Congrats player for passing\n");
  console.log("Now you are in medium level, let's start the game\n\n");
}

function getAnswerAndValidate(answer) {
  const userAnswer = prompt("What is the Key ? ");

  if (userAnswer === answer) {
    console.log(CORRECT_ANSWER);
    return;
  }

  console.log(WRONG_ANSWER);
  return getAnswerAndValidate(answer);
}

function printPuzzleMessage(puzzle) {
  console.log("This is the second part of the quest !!");
  console.log("Solve this puzzle, using answer for the previous one ~");
  console.log("The puzzle is : \n\n", puzzle);
}

function askPuzzle(puzzle, puzzleAnswer) {
  printPuzzleMessage(puzzle);
  getAnswerAndValidate(puzzleAnswer);

  console.log(LEVEL_PASSED);
}

function askQuestion(question, answer, puzzle, puzzleAnswer) {
  const decoration = "🍊 Player our secret hint is: \n\n";
  console.log(decoration, question);
  console.log("Find the secret key and go to next Level\n");

  getAnswerAndValidate(answer);

  askPuzzle(puzzle, puzzleAnswer);
}

function askEasyQuestions() {
  askQuestion(easyQuestion1, easyQue1Answer, puzzle1, puzzleSolution1);
  askQuestion(easyQuestion2, easyQue2Answer, puzzle2, puzzleSolution2);
}

function startEasyLevel() {
  console.log("I see you have started the game alright go one then !\n");
  console.log("Now you are in Easy level, let's start the game\n\n");

  askEasyQuestions();
}

function startMediumLevel() {
  greetForPassing();

  askQuestion(mediumQuestion1, mediumQue1Answer, puzzleSolution3);
}

function startHardLevel() {
  greetForPassing();

  askQuestion(hardQuestion1, hardQue1Answer, puzzleSolution4);
}

function congratulatePlayer() {
  console.log("You haven founded all the answers ");
  console.log("Well, Done your treasure \n");
  console.log(QUOTE_ONE_PIECE);
}

function gameStart() {
  greetPlayer();

  startEasyLevel();
  startMediumLevel();
  startHardLevel();

  congratulatePlayer();
}

gameStart();
