import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props){
    return (
        <button className = "Square" onClick = {props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
                <Square
                    value = {this.props.squares[i]}
                    onClick = {() => this.props.onClick(i)}
                />
        );
    }

    render() {
        const squares = Array(9);
        for(let i = 0; i < 9; i++){
                squares[i] = this.renderSquare(i);
        }
        return squares;
    }


}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            history: [ {squares: Array(9), moves: Array(2)}],
            stepNumber: 0,
            moveAsc: true
        };

    }

    changeMoveOrder(){
        this.setState({
            moveAsc: !this.state.moveAsc
        });
    }
    jumpTo(step) {
        this.setState({
            
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
      }
    
    handleClick(i) {
        const [row, col] = [Math.floor(i/3) + 1, i % 3 + 1];
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const squares = history[this.state.stepNumber].squares;
        
        if (!squares[i] && !calculateWinner(squares, this.state.stepNumber)){
            let squaresCopy = squares.slice();
            squaresCopy[i] = this.state.xIsNext ? "X" : "O";

            this.setState({
                xIsNext: !this.state.xIsNext,
                history: history.concat([
                    {squares: squaresCopy, moves: [row, col]}
                ]),
                stepNumber: this.state.stepNumber + 1,
                
            });

            
        }
    }

    render() {
        const history = this.state.history;
        const moves = history.map((step, move) => {
            if (!this.state.moveAsc){
                move = this.state.history.length - 1 - move;
            }
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            
              
            const coor = this.state.history[move].moves;

            return (
              <li key={move}>
                <button onClick={() => this.jumpTo(move)} 
                    style={{backgroundColor: this.state.stepNumber === move ? "yellow" : ""}}>
                        {desc}
                </button>
                {move !== 0 && <span>{" row: " + coor[0] + " col: " + coor[1]}</span>}
              </li>
            );
          });
        const squares = history[this.state.stepNumber].squares;
        let status = calculateWinner(squares, this.state.stepNumber);
        if (!status){
            status = "Turn for: " + (this.state.xIsNext ? "X" : "O");
        }

        return (
            <div className = "Game">
                <div className = "GameBoard">
                    <Board 
                        squares = {squares}
                        onClick = {i => this.handleClick(i)}
                    />
                </div>
                <div className = "GameInfo">
                    {status}
                </div>
                <button onClick = {() => this.changeMoveOrder()}>Reverse order</button>
                <ul>
                    {moves}
                </ul>
            </div>
        );
    }
}

// ==============================

ReactDOM.render(<Game />, document.getElementById('root'));

function calculateWinner(board, stepNumber){
    
    if (stepNumber >= 5) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            // calculate draw (two different pieces on every line)
            if (board[a] && board[a] === board[b] && board[b] === board[c]){
                return board[a] + ' is winner';
            }
        }
    }

    if (stepNumber === 9){
        return "Draw";
    }
    return null;
}