import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    //note: has to be props.onClick and not props.onClick() to keep the function from
    //running immediately instead of passing it down
    <button className="square" onClick={props.onClick}>
    {props.value}</button>
  );
}

class Board extends React.Component {
  //constructor is where you initialize state
  //creating an array with 9 nulls corresponding to the 9 squares
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      //default to start with X and flip boolean when not X's turn
      xIsNext: true,
    };
  }

  handleClick(i) {
    //copy squares array
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      //sets the state of xIsNext when X is not next, thus allowing the state to flip to 'O'
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
    <Square 
      //passing a value prop to square
      value={this.state.squares[i]} 
      //when square is clicked update the state of board
      onClick={() => this.handleClick(i)} />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    //Status changes depending on the state of xIsNext
    const status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
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
      </div>
    );
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
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
