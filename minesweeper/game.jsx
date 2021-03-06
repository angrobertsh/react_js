import React from 'react';
import Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component{

  constructor() {
    super();
    this.state = {board: new Minesweeper.Board(10, 10)};
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagging) {
    if (flagging) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  }

  render () {
    return <Board board = {this.state.board} updateGame = {this.updateGame} />;
  }

}

export default Game;
