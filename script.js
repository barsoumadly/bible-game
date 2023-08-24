'use strict';

// selecting elements
let boxes = document.querySelectorAll('.box');
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

// reversing boxes nodeList
boxes = Array.from(boxes);
boxes.reverse();

const moveBall = function (currentPlayer, ballMove) {
  const element = document.querySelector(`.p${currentPlayer}-move`);
  element.classList.remove('hidden');
  if (boxes[ballMove - 1] !== '') {
    boxes[ballMove - 1].insertAdjacentElement('afterbegin', element);
  } else {
    boxes[ballMove].insertAdjacentElement('afterbegin', element);
  }
};

const changeActivePlayer = function () {
  if (currentPlayer === 1) {
    activePlayerEL.textContent = "Yellow's Turn:";
    btnRoll.style.backgroundColor = 'rgb(243, 181, 46)';
    redBall.classList.add('hidden');
  } else {
    activePlayerEL.textContent = "Red's Turn:";
    btnRoll.style.backgroundColor = 'rgb(236, 82, 82)';
    yellowBall.classList.add('hidden');
  }
  currentPlayer = currentPlayer === 1 ? 2 : 1;
};

btnRoll.addEventListener('click', function (event) {
  event.preventDefault();
  const number = generateRandomNumber();
  diceEL.textContent = number;

  // moving ball
  if (currentPlayer === 1) {
    redMove += number;
    moveBall(currentPlayer, redMove, number);
  } else {
    yellowMove += number;
    moveBall(currentPlayer, yellowMove, number);
  }

  changeActivePlayer();
});
