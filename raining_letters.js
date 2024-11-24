const SPACE = " ";
const SCREEN_CLEAR_CONSTANT = 35;
const NEW_LINE = "\n";

const alphabetsSmall = "abcdefghijklmnopqrstuvwxyz";
const alphabetCapital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function delay(seconds) {
  const limit = seconds ** 10;
  for (let second = 0; second < limit; second++);

}

function randomNumberInRange(from, to) {
  const randomDecimalInRange = Math.random() * (to - from + 1);

  return Math.floor(randomDecimalInRange) + from;
}

function repeat(char, times) {
  let line = "";

  for (let count = 0; count < times; count++) {
    line = line + char;
  }

  return line;
}


function createRandomLine(yOffSet, xOffSet, string) {
  const letterCount = randomNumberInRange(yOffSet, xOffSet);
  let randomLine = ''

  for (let count = 0; count < letterCount; count++) {
    const randomIndex = randomNumberInRange(0, string.length - 1);
    const spaces = repeat(SPACE, randomIndex);

    randomLine = randomLine + spaces;
    randomLine = randomLine + string[randomIndex];
  }

  return randomLine;
}

function findLastIndex(string, char) {
  for (let index = string.length - 1; index >= 0; index--) {
    if (string[index] === char) {
      return index;
    }
  }

  return -1;
}

function slice(string, from, to) {
  let newString = "";

  for (let index = from; index <= to; index++) {
    newString += string[index];
  }

  return newString;
}

function clearLastLine(string) {
  const lastNewLine = findLastIndex(string, NEW_LINE);

  return slice(string, 0, lastNewLine - 1);
}

function startRainLetter(yOffSet, xOffSet, lineCount, wait, string) {
  let rainingLine = "";

  for (let line = 1; line <= lineCount; line++) {
    console.clear();

    const randomLine = createRandomLine(yOffSet, xOffSet, string);
    rainingLine = NEW_LINE + randomLine + rainingLine;

    if (line > SCREEN_CLEAR_CONSTANT) {
      rainingLine = clearLastLine(rainingLine);
    }

    console.log(rainingLine);
    delay(wait);
  }
}

const yOffSet = 1;
const xOffSet = 6;
const numberOfLines = 350;
const wait = 7;

startRainLetter(yOffSet, xOffSet, numberOfLines, wait, alphabetCapital);
