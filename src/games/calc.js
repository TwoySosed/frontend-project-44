import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);

  return operators[operatorIndex];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, operator));

  return [question, correctAnswer];
};

const startCalcGame = () => {
  runGame(description, generateRound);
};

export default startCalcGame;
