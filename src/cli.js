import readlineSync from 'readline-sync';

export const User = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);