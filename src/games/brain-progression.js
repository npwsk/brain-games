import { startGame as startAnyGame, generateNumber } from '../index.js';

const progressionLength = 10;
const maxProgressionDifference = 9;
const maxProgressionFirstTerm = 30;
const instructionsMessage = 'What number is missing in the progression?';

const calculateProgression = (term, differnce, termIndex = 0) => {
  const firstChunk = [];
  const secondChunk = [];
  while (firstChunk.length < termIndex) {
    const currentTerm = term - differnce * (firstChunk.length + 1);
    firstChunk.unshift(currentTerm);
  }
  while (secondChunk.length < progressionLength - termIndex) {
    const currentTerm = term + differnce * secondChunk.length;
    secondChunk.push(currentTerm);
  }
  return [...firstChunk, ...secondChunk];
};

const generateProgression = () => {
  const firstTerm = generateNumber(maxProgressionFirstTerm);
  const differnce = generateNumber(maxProgressionDifference) + 1;
  const progression = calculateProgression(firstTerm, differnce);
  return progression;
};

const getQuestion = () => {
  const progression = generateProgression();
  const indexOfMissingTerm = generateNumber(10);
  const modifiedProgression = [...progression.slice(0, indexOfMissingTerm),
    '..',
    ...progression.slice(indexOfMissingTerm + 1)];
  return modifiedProgression.join(' ');
};

const getCorrectAnswer = (questionString) => {
  const progression = questionString.split(' ');
  const indexOfMissingTerm = progression.indexOf('..');
  const [first, second, third] = progression;
  let difference;
  switch (indexOfMissingTerm) {
    case 0:
      difference = third - second;
      break;
    case 1:
      difference = (third - first) / 2;
      break;
    default:
      difference = second - first;
  }
  const completeProgression = indexOfMissingTerm === 0
    ? calculateProgression(Number(second), difference, 1)
    : calculateProgression(Number(first), difference);
  const missingTerm = completeProgression[indexOfMissingTerm];
  return String(missingTerm);
};

const startGame = () => startAnyGame(instructionsMessage, getQuestion, getCorrectAnswer);

export default startGame;
