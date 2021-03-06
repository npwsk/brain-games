import * as cli from './cli.js';

const roundsMaxCount = 3;

const generateNumber = (maxNumber) => Math.floor(Math.random() * maxNumber);

const checkAnswer = (correctAnswer, userAnswer) => {
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

const startGame = (gameInstructionsMessage, getQuestion, calculateAnswer) => {
  const userName = cli.getUserName();
  cli.printGameInstructions(gameInstructionsMessage);
  for (let round = 1; round <= roundsMaxCount; round += 1) {
    const question = getQuestion();
    const userAnswer = cli.getUserAnswer(question);
    const correctAnswer = calculateAnswer(question);
    if (!checkAnswer(correctAnswer, userAnswer)) {
      cli.printDebugMessage(userAnswer, correctAnswer);
      cli.printLossMessage(userName);
      process.exit();
    }
    cli.printSuccessMessage();
  }
  cli.printWinMessage(userName);
};

export {
  generateNumber, startGame,
};
