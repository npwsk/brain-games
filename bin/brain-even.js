#!/usr/bin/env node
import * as cli from '../src/cli.js';
import { generateNumber, checkAnswer, getCorrectAnswer } from '../src/core.js';

const userName = cli.getUserName();
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
