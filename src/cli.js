import { question } from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const printGameInstructions = (message) => {
  console.log(`${message}`);
};

const getUserAnswer = (questionMessage) => {
  console.log(`Question: ${questionMessage}`);
  const answer = question('Your answer: ');
  return answer;
};

const printDebugMessage = (userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
};

const printSuccessMessage = () => {
  console.log('Correct!');
};

const printLossMessage = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

const printWinMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export {
  getUserName, getUserAnswer, printDebugMessage,
  printSuccessMessage, printLossMessage,
  printWinMessage, printGameInstructions,
};
