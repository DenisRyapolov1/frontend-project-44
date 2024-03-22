import readlineSync from 'readline-sync';

const User = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default User;