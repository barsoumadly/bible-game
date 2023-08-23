'use strict';

// selecting elements
const boxes = document.querySelectorAll('.box');
const diceEL = document.getElementById('dice');
const activePlayerEL = document.getElementById('tog');
const redBall = document.getElementById('p1');
const yellowBall = document.getElementById('p2');

// selecting buttons
const btnRoll = document.querySelector('.btn-roll');

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

// declearing main variables
let redMove = 0;
let yellowMove = 0;
let currentPlayer = 1;

const moveBall = function (currentPlayer, ballMove) {
  if (boxes[ballMove - 1] !== '') {
    boxes[ballMove - 1].insertAdjacentHTML(
      'afterbegin',
      `<p class="p${currentPlayer}-move"></p>`
    );
  } else {
    boxes[ballMove].innerHTML = `<p class="p
      ${currentPlayer}-move"></p>`;
  }
};

const removeBall = function (position) {
  if (position !== 0) {
    boxes[position - 1].innerHTML = '';
  }
};

btnRoll.addEventListener('click', function (event) {
  event.preventDefault();
  const number = generateRandomNumber();
  diceEL.textContent = number;

  // moving ball
  if (currentPlayer === 1) {
    removeBall(redMove);
    redMove += number;
    moveBall(currentPlayer, redMove, number);
  } else {
    removeBall(yellowMove);
    yellowMove += number;
    moveBall(currentPlayer, yellowMove, number);
  }

  // changing active player
  currentPlayer = currentPlayer === 1 ? 2 : 1;
});
