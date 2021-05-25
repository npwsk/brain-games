#!/usr/bin/env node
const maxGeneratedNumber = 100;

const generateNumber = () => Math.floor(Math.random() * maxGeneratedNumber);

const isEven = (number) => number % 2 === 0;

const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const checkAnswer = (number, userAnswer) => {
  const correctAnswer = getCorrectAnswer(number);
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

export {
  generateNumber, checkAnswer, getCorrectAnswer,
};
