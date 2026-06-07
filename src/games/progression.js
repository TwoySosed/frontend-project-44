import runGame from '../index.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const getRandomStep = () => Math.floor(Math.random() * 10) + 1;
const getProgressionLength = () => Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;

const makeProgression = (start, step, length) => {
  const progression = [];

  for (let index = 0; index < length; index += 1) {
    progression.push(start + index * step);
  }

  return progression;
};

const generateRound = () => {
  const start = getRandomNumber();
  const step = getRandomStep();
  const length = getProgressionLength();
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = makeProgression(start, step, length);
  const correctAnswer = String(progression[hiddenIndex]);

  const question = progression
    .map((value, index) => (index === hiddenIndex ? '..' : value))
    .join(' ');

  return [question, correctAnswer];
};

const startProgressionGame = () => {
  runGame(description, generateRound);
};

export default startProgressionGame;
