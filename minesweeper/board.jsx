import React from 'react';
import Tile from './tile';

class Board extends React.Component{

  constructor() {
    super();
  }

  render () {

    const grid = this.props.board.grid.map((tileRow, row) => {
      const newRow = tileRow.map((tile, col) => {
        return (<Tile key={row + col} tile={tile} updateGame=
          {this.props.updateGame} />);
      });
      return (<ul className="grid-row" key={row}>{newRow}</ul>);
    });

    return (
      <div>
        {grid}
      </div>
    );
  }

}

export default Board;
