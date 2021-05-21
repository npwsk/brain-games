import { question } from 'readline-sync';

const greet = () => {
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default greet;
