import React from 'react';
import ReactDOM from "react-dom";
import './index.css';

//peg hint colors: gold #ffd700, black #000, white, #fff
const colors = [
  //red
  '#e50000', 
  //blue
  '#0000FF', 
  //green
  '#008000',
  //orange 
  '#ff8100', 
  //purple
  '#a504a5',
  //aqua 
  '#55e8db'
]

function secretCreator() {
  const randomColors = [];
  const length = 3;

  for(let i = 0; i <= length; i++) {
    const randomItem = colors[Math.floor(Math.random()*colors.length)];
    randomColors.push(randomItem);
  }
}

class Guess extends React.Component {
  render() {
    return <span className="guess" />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

class SecretRow extends React.Component {
  render() {
    return <button>Reveal Answer</button>;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(30).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
    <Square 
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    return <div>
        <h1>MasterMind</h1>
        <div className="buttons">
          <button className="new-game">New Game</button>
          <button className="check">Check</button>
        </div>
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div className="board-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="board-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
          <div className="board-row">
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
          <div className="board-row">
            {this.renderSquare(18)}
            {this.renderSquare(19)}
            {this.renderSquare(20)}
          </div>
          <div className="board-row">
            {this.renderSquare(21)}
            {this.renderSquare(21)}
            {this.renderSquare(23)}
          </div>
          <div className="board-row">
            {this.renderSquare(24)}
            {this.renderSquare(25)}
            {this.renderSquare(26)}
          </div>
          <div className="board-row">
            {this.renderSquare(27)}
            {this.renderSquare(28)}
            {this.renderSquare(29)}
          </div>
          <div className="secret">
            <h2>Answer:</h2>
            <SecretRow />
          </div>
        </div>
      </div>;
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>  
    );
  }
}

function calculateWinner(squares) {
  //check if the active row matches the solution row
}

ReactDOM.render(<Game />, document.getElementById("root"));