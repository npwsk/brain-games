import { startGame as startAnyGame, generateNumber } from '../index.js';

const instructionsMessage = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getRandomOperation = () => operations[Math.floor(Math.random() * 3)];

const generateExpression = () => {
  const num1 = generateNumber();
  const num2 = generateNumber();
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
