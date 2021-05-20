import { question } from 'readline-sync';

export const greet = () => {
  const name = question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}
