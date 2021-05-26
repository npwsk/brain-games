import { startGame as startAnyGame, generateNumber } from '../index.js';

const maxRandomNumber = 50;
const instructionsMessage = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRandomOperation = () => operations[generateNumber(operations.length)];

const generateExpression = () => {
  const num1 = generateNumber(maxRandomNumber);
  const num2 = generateNumber(maxRandomNumber);
  const operation = getRandomOperation();
  return `${num1} ${operation} ${num2}`;
};

const getCorrectAnswer = (expression) => {
  const [op1, operation, op2] = expression.split(' ');
  const num1 = Number(op1);
  const num2 = Number(op2);
  let result = null;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return String(result);
};

const startGame = () => startAnyGame(instructionsMessage, generateExpression, getCorrectAnswer);

export default startGame;
