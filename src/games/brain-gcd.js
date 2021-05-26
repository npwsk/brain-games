import { startGame as startAnyGame, generateNumber } from '../index.js';

const maxRandomNumber = 100;
const instructionsMessage = 'Find the greatest common divisor of given numbers.';

const generateQuestion = () => {
  const num1 = generateNumber(maxRandomNumber);
  const num2 = generateNumber(maxRandomNumber);
  return `${num1} ${num2}`;
};

const calculateGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGCD(b, a % b);
};

const getCorrectAnswer = (pair) => {
  const [stringNum1, stringNum2] = pair.split(' ');
  const num1 = Number(stringNum1);
  const num2 = Number(stringNum2);
  const gcd = calculateGCD(num1, num2);
  return String(gcd);
};

const startGame = () => startAnyGame(instructionsMessage, generateQuestion, getCorrectAnswer);

export default startGame;
