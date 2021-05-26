import { startGame as startAnyGame, generateNumber } from '../index.js';

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const gameInstructionsMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => startAnyGame(gameInstructionsMessage, generateNumber, getCorrectAnswer);

export default startGame;
