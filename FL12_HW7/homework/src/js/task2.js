const GAME = {
  attempts: 3,
  maxNumber: 8,
  possiblePrize: 100,
  totalPrize: 0
};
const ONE = 1;
const PRIZE_MULTIPLIER = 2;
const NEXT_RANGE_INCREASE = 4;
const ATTEMPTS_STEP = 1;
let attempts = GAME.attempts;
let maxNumber = GAME.maxNumber;
let possiblePrize = GAME.possiblePrize;
let totalPrize = GAME.totalPrize;
let exitMessage = 'You did not become a billionaire, but can.';

if (confirm('Do you want to play a game?')) {
  while (attempts > 0) {
    let randomNumber = Math.floor(Math.random() * maxNumber) + ONE;
    let userNumber = +prompt(
      'Choose a roulette pocket number from 0 to ' + maxNumber +
      '\n Attempts left: ' + attempts +
      '\n Total prize: ' + totalPrize + '$' +
      '\n Possible prize on current attempt: ' + possiblePrize + '$'
    );
    if (userNumber === randomNumber) {
      totalPrize = totalPrize + possiblePrize;
      alert('Congratulation, you won! Your prize is: ' +
      totalPrize + '$.');
      if (!confirm('Do you want to continue?')) {
        alert(exitMessage);
        break;

      } else {
        attempts = GAME.attempts;
        maxNumber = maxNumber + NEXT_RANGE_INCREASE;
        possiblePrize = possiblePrize * PRIZE_MULTIPLIER;
      }
    } else if (!userNumber) {
      alert(exitMessage);
      break;
    } else {
      attempts = attempts - ATTEMPTS_STEP;
      possiblePrize = possiblePrize / PRIZE_MULTIPLIER;
      if (attempts === 0) {
        alert('Thank you for your participation. Your prize is: ' +
        totalPrize + '$.');
         if (confirm('Do you want to play again?')) {
          attempts = GAME.attempts;
          maxNumber = GAME.maxNumber;
          possiblePrize = GAME.possiblePrize;
          totalPrize = GAME.totalPrize;
        } else {
          alert(exitMessage);
          break;
        }
      }
    }
  }
} else {
  alert(exitMessage);
}