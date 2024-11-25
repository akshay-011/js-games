const gameName = `
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⋆ ˚｡⋆ ˚｡⋆ ˚｡⋆ ˚｡⋆୨୧˚ STEP-10 INTO THE STEPVERSE ˚୨୧⋆｡˚ ⋆｡˚ ⋆｡˚ ⋆｡˚ ⋆
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`;
const QUOTE1 = '\n"A game for those who seek to find a way to leave their world behind .・✫・゜・。.・゜✭・"\n';
const QUOTE2 = "\n\nDo not begin unless you intend to finish otherwise... You'll get the curse of MARKUS HAYAK!!!\n";
const QUOTE_ONE_PIECE = "\n\n'𝐼𝓉 𝒾𝓈 𝓃𝑜𝓉 𝓉𝒽𝑒 𝓌𝑒𝒶𝓁𝓉𝒽 𝒷𝓊𝓉 𝓂𝒶𝓎𝒷𝑒, 𝓉𝒽𝑒 𝒻𝓇𝒾𝑒𝓃𝒹𝓈 𝓌𝑒 𝓂𝒶𝒹𝑒 𝒶𝓁𝓁 𝒶𝓁𝑜𝓃𝑔, 𝒾𝓈 𝓉𝒽𝑒 𝓇𝑒𝒶𝓁 𝓉𝓇𝑒𝒶𝓈𝓊𝓇𝑒.･:.｡..｡.:'\n";

const easyQuestion1 = "I caused the extinction of an entire species ? 🗿";
const easyQuestion2 = "I am an indian🇮🇳 mathematician born on 476 AD, who am i ?";
const mediumQuestion1 = "The record good😊 & bad😭 moments ? What am i ? (w___ o_ w__ a__ o___)";
const hardQuestion1 = "I am the expensive thing humans made💸 ! What am i ?";

const easyQue1Answer = "asteroid";
const easyQue2Answer = "aryabhatta";
const mediumQue1Answer = "wall of wow and ouch";
const hardQue1Answer = "is store room";

// sub puzzless
const puzzle1 = "Your finger has the power!";
const puzzle2 = "ESTIMATE the EMPLOYEES IPHONE of ARGUMENTS by TROY-SINGHAM";
const puzzle3 = "I'm under the sun and above the rainbow";
const puzzle4 = `
Follow the trail of compass direction\n
\tTo the place written below the rose protection\n
\t\tThere you'll uncover the secret, it's true\n
\t\t\tThe answer to complete this quest waits behind the blue ･.｡..｡.:
`;

const puzzleSolution1 = "energy";
const puzzleSolution2 = "smart";
const puzzleSolution3 = "felopzd";
const puzzleSolution4 = "family";

//why so many separation?
const descSegment1 = "You might think this floor of thoughtworks is nothing special.\n";
const descSegment2 = "But... Right in this floor lies a powerful artifact!💎\n\n\n";
const descSegment3 = "‧͙⁺˚･༓☾ The STEPSUS PRISM ☽༓･˚⁺‧͙\n\n\n";
const descSegment4 = "It is the prism that connects all the step interns of different multiverses.\n";
const descSegment5 = "Players must race across countless worlds🗺️, solving challenges🔎😎 in each universe, \n";
const descSegment6 = "to find the artifact before dark forces, BAYAN & BILAJ😈🧿 use it to merge the multiverses into chaos😱.\n";

const descriptionPart1 = descSegment1 + descSegment2 + descSegment3;
const descriptionPart2 = descSegment4 + descSegment5 + descSegment6;
const description = descriptionPart1 + descriptionPart2;

const instructionHead = "<————«——««——««« INSTRUCTION »»»——»»——»————>\n\n";
const instruction1 = "✧ each level has a main quest and a sub puzzle\n";
const instruction2 = "✧ find answer of the main quest, then according to that solve the puzzle\n";
const instruction3 = "✧ puzzle can only be found at the main quest's location only\n";
const instruction4 = "✧ puzzle solutions are single word, maybe random letters with no cap or spaces\n";

const instruction = instructionHead + instruction1 + instruction2 + instruction3 + instruction4;

const WRONG_ANSWER = "❌ Ouch i guess you haven't cracked the hint yet !!";
const CORRECT_ANSWER = "🥳 You got it! Now moving on to next question! Hang on\n\n";
const heading = "♛┈┈┈┈✨┈┈⛧┈┈┈•༶┈•༶💫STEP-10 ACROSS THE STEPVERSE💫༶•┈༶•┈┈⛧┈┈✨┈┈┈┈♛";
const LEVEL_PASSED = "Woohoo! You've finished your quest in this universe! Moving on to the next one!\n\n";
const PUZZLE_SEPERATOR = "⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇⋇⋆✦⋆⋇\n";

const PASS_DECORATION = "\n\n🎉 🥳😘🥳🎉 🥳😘🥳🎉 🥳😘🥳\n";
const PASS_SENTENCE = "🎉 Congrats for clearing it!\n";

function greetPlayer() {
  console.log(gameName, QUOTE1, description, QUOTE2);

  confirm("Shall we start the game ? ");
  console.clear();
  console.log("\nRegardless of what you want, we have already started😌 !\n\n");
}

function greetForPassing() {
  console.log(PASS_DECORATION, PASS_SENTENCE, LEVEL_PASSED);
}

function getAnswerAndValidate(answer) {
  const userAnswer = prompt("\nWhat is the Key ? ");

  if (userAnswer === answer) {
    console.log(CORRECT_ANSWER);
    return;
  }

  console.log(WRONG_ANSWER);
  return getAnswerAndValidate(answer);
}

function printPuzzleMessage(puzzle) {
  console.log(PUZZLE_SEPERATOR);
  console.log("This is the second part of the quest !!");
  console.log("Solve this puzzle, using answer from the previous one ~");
  console.log("The puzzle is : \n", puzzle);
}

function askPuzzle(puzzle, puzzleAnswer) {
  printPuzzleMessage(puzzle);
  getAnswerAndValidate(puzzleAnswer);
}

function askQuestion(question, answer, puzzle, puzzleAnswer) {
  console.clear();
  
  printInstructionMessage();
  const decoration = "🍊 Player our secret hint is: \n\n ";
  console.log(decoration, '┈┈┈┈✿', question, '✿┈┈┈┈');
  console.log("\nFind the secret key and go to next Level\n");

  getAnswerAndValidate(answer);
  askPuzzle(puzzle, puzzleAnswer);
}

function askEasyQuestions() {
  askQuestion(easyQuestion1, easyQue1Answer, puzzle1, puzzleSolution1);
  askQuestion(easyQuestion2, easyQue2Answer, puzzle2, puzzleSolution2);
}

function startEasyLevel() {
  console.log("I see you have started the game alright go one then !\n");
  prompt("Now you are in Easy level, let's start the game\n\n(press enter)");
  askEasyQuestions();
}

function startMediumLevel() {
  greetForPassing();

  askQuestion(mediumQuestion1, mediumQue1Answer, puzzle3, puzzleSolution3);
}

function startHardLevel() {
  greetForPassing();
  askQuestion(hardQuestion1, hardQue1Answer, puzzle4, puzzleSolution4);
}

function printInstructionMessage() {
  console.log(instruction);
}

function congratulatePlayer() {
  console.clear();
  console.log("ʏᴏᴜ ʜᴀᴠᴇ ꜰᴏᴜɴᴅ ᴀʟʟ ᴛʜᴇ ᴀɴꜱᴡᴇʀ.");
  prompt("ᴡᴇʟʟ ᴅᴏɴᴇ! ɴᴏᴡ ꜰᴏʀ ʏᴏᴜʀ ᴛʀᴇᴀꜱᴜʀᴇ ᴘʀᴇꜱꜱ ᴇɴᴛᴇʀ...\n");
  console.log(QUOTE_ONE_PIECE);

  console.log("ᴘʟᴇᴀꜱᴇ, ᴅᴏɴ'ᴛ ʀᴇᴠᴇᴀʟ ᴛʜᴇ ᴀɴꜱᴡᴇʀꜱ ᴛᴏ ʏᴏᴜʀ ᴄᴏʟʟᴇᴀɢᴜᴇꜱ")
  console.log("ʟᴇᴛ ᴛʜᴇᴍ ʜᴀᴠᴇ ᴛʜᴇ ꜰᴜɴ ᴀꜱ ᴡᴇʟʟ\n\n")
}

function gameStart() {
  greetPlayer();
  printInstructionMessage();
  startEasyLevel();
  startMediumLevel();
  startHardLevel();

  congratulatePlayer();
}

gameStart();
