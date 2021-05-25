import { question } from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default getUserName;
