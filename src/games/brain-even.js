import * as cli from '../cli.js';
import { generateNumber, checkAnswer, getCorrectAnswer } from '../index.js';

const startGame = () => {
  const userName = cli.getUserName();
  cli.printGameInstructions();
  for (let round = 1; round <= 3; round += 1) {
    const number = generateNumber();
    const userAnswer = cli.getUserAnswer(number);
    const correctAnswer = getCorrectAnswer(number);
    if (!checkAnswer(number, userAnswer)) {
      cli.printDebugMessage(userAnswer, correctAnswer);
      cli.printLossMessage(userName);
      process.exit();
    }
    cli.printSuccessMessage();
  }
  cli.printWinMessage(userName);
};

export default startGame;
