import { startGame as startAnyGame, generateNumber } from '../index.js';

const maxRandomNumber = 50;
const gameInstructionsMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = () => generateNumber(maxRandomNumber);

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const startGame = () => startAnyGame(gameInstructionsMessage, getRandomNumber, getCorrectAnswer);

export default startGame;
