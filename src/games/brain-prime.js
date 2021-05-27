import { startGame as startAnyGame, generateNumber } from '../index.js';

const maxRandomNumber = 100;
const instructionsMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => generateNumber(maxRandomNumber);

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let possibleDivisor = 2; possibleDivisor <= Math.sqrt(number); possibleDivisor += 1) {
    if (number % possibleDivisor === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

const startGame = () => startAnyGame(instructionsMessage, getRandomNumber, getCorrectAnswer);

export default startGame;
