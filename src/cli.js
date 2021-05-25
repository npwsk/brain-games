import { question } from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

const getUserAnswer = (number) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);
  const answer = question('Your answer: ');
  return answer;
};

export {
  getUserName, getUserAnswer,
};
