import React from 'react';
import ReactDOM from 'react-dom';
import Minesweeper from './minesweeper';
import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("board");

  ReactDOM.render( <Game />, root);
});
