import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

const startPrimeGame = () => {
  runGame(description, generateRound);
};

export default startPrimeGame;
