const square = document.getElementById('square');
const squares = document.querySelectorAll('.square__item');
let click = 0;

const playerOne = 'square__item--one';
const playerTwo = 'square__item--two';
const gameOver = 'square--disabled';

const square1 = document.getElementById('square-1');
const square2 = document.getElementById('square-2');
const square3 = document.getElementById('square-3');
const square4 = document.getElementById('square-4');
const square5 = document.getElementById('square-5');
const square6 = document.getElementById('square-6');
const square7 = document.getElementById('square-7');
const square8 = document.getElementById('square-8');
const square9 = document.getElementById('square-9');

const result = document.getElementById('result-message');

const reset = document.getElementById('reset');

const playerOneWins = () => {
  if(
    square1.classList.contains(playerOne) &&
    square2.classList.contains(playerOne) &&
    square3.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square4.classList.contains(playerOne) &&
    square5.classList.contains(playerOne) &&
    square6.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square7.classList.contains(playerOne) &&
    square8.classList.contains(playerOne) &&
    square9.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square1.classList.contains(playerOne) &&
    square4.classList.contains(playerOne) &&
    square7.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square2.classList.contains(playerOne) &&
    square5.classList.contains(playerOne) &&
    square8.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square3.classList.contains(playerOne) &&
    square6.classList.contains(playerOne) &&
    square9.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square1.classList.contains(playerOne) &&
    square5.classList.contains(playerOne) &&
    square9.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square3.classList.contains(playerOne) &&
    square5.classList.contains(playerOne) &&
    square7.classList.contains(playerOne)
    ) {
    result.innerHTML += 'Jogador 1 venceu :)';
    square.classList.add(gameOver);
  }
}

const playerTwoWins = () => {
  if(
    square1.classList.contains(playerTwo) &&
    square2.classList.contains(playerTwo) &&
    square3.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square4.classList.contains(playerTwo) &&
    square5.classList.contains(playerTwo) &&
    square6.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square7.classList.contains(playerTwo) &&
    square8.classList.contains(playerTwo) &&
    square9.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square1.classList.contains(playerTwo) &&
    square4.classList.contains(playerTwo) &&
    square7.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square2.classList.contains(playerTwo) &&
    square5.classList.contains(playerTwo) &&
    square8.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square3.classList.contains(playerTwo) &&
    square6.classList.contains(playerTwo) &&
    square9.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square1.classList.contains(playerTwo) &&
    square5.classList.contains(playerTwo) &&
    square9.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }

  if(
    square3.classList.contains(playerTwo) &&
    square5.classList.contains(playerTwo) &&
    square7.classList.contains(playerTwo)
    ) {
    result.innerHTML += 'Jogador 2 venceu :)';
    square.classList.add(gameOver);
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function() {

    click += 1;
    if(click & 1) {
      this.classList.add(playerOne);
      playerOneWins();
    } else {
      this.classList.add(playerTwo);
      playerTwoWins();
    }
  });
}

if (reset) {
  reset.addEventListener('click', () => {
    square.classList.remove('square--disabled');

    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.remove('square__item--one');
      squares[i].classList.remove('square__item--two');
    }

    result.innerHTML = '';
  });
}

