import React from 'react';


class Tile extends React.Component{

  constructor() {
    super();
  }

  handleClick () {
    this.props.updateGame(this.props.tile, false);
  }

  handleRightClick (event) {
    event.preventDefault();
    this.props.updateGame(this.props.tile, true);
  }

  render () {
    const flagged = this.props.tile.flagged;
    const explored = this.props.tile.explored;
    const bombed = this.props.tile.bombed;
    const explosivity = this.props.tile.adjacentBombCount();
    let ourTile;
    console.log(flagged, explored, bombed);

    if (explored && bombed) {
      // this.setState({display: '\uD83D\uDCA3', status: "bombed"});
      ourTile = (<li className="tile revealed bombed" onClick={this.handleClick.bind(this)}>{`\uD83D\uDCA3`}</li>);
    } else if (explored && explosivity > 0) {
      // this.setState({display: explosivity, status: "revealed"});
      ourTile = (<li className="tile revealed" onClick={this.handleClick.bind(this)}>{explosivity}</li>);
    } else if (flagged) {
      // this.setState({display: '\u2691', status: "flagged"});
      ourTile = (<li className="tile flagged" onContextMenu={this.handleRightClick.bind(this)} onClick={this.handleClick.bind(this)}>{`\u2691`}</li>);
    } else if (explored) {
      // this.setState({display: "", status: "revealed"});
      ourTile = (<li className="tile revealed" onClick={this.handleClick.bind(this)}></li>);
    } else {
      ourTile = (<li className="tile" onContextMenu={this.handleRightClick.bind(this)} onClick={this.handleClick.bind(this)}></li>);
    }

    return ourTile;
  }

}

export default Tile;
