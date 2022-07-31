import { React, useEffect, useState } from "react";
import "./App.css";
import Square from "./Square";
import { Patterns } from "./Patterns";

function App() {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState("X");
	const [result, setResult] = useState({ winner: "none", state: "none" });
	useEffect(() => {
		checkWin();
	}, [board]);
	useEffect(() => {
		if (result.state != "none") alert("game over");
	}, [result]);
	const chooseSquare = (square) => {
		setBoard(
			board.map((val, idx) => {
				if (idx === square && val == "") {
					return player;
				}

				return val;
			})
		);
		if (player == "X") {
			setPlayer("O");
		} else setPlayer("X");
	};
	const checkWin = () => {
		var i = 0;
		let iter = 0;
		Patterns.forEach((currPatter) => {
			const firstPlayer = board[currPatter[0]]; // here its check for which place u mark as x or O
			console.log(iter + "=>" + firstPlayer);
			iter++;
			if (firstPlayer == "") {
				return;
			}
			let foundWinningPattern = true;
			console.log("byr" + currPatter + "yui" + currPatter[0]);
			console.log(currPatter + ">>>>" + i);
			currPatter.forEach((idx) => {
				i++;

				if (board[idx] != firstPlayer) {
					foundWinningPattern = false;
				}
			});
			if (foundWinningPattern) {
				setResult({
					winner: player,
					state: "won",
				});
			}
		});
	};
	return (
		<div className="App">
			<div className="board">
				<div className="row">
					<Square
						value={board[0]}
						chooseSquare={() => {
							chooseSquare(0);
						}}
					/>
					<Square
						value={board[1]}
						chooseSquare={() => {
							chooseSquare(1);
						}}
					/>
					<Square
						value={board[2]}
						chooseSquare={() => {
							chooseSquare(2);
						}}
					/>
				</div>
				<div className="row">
					<Square
						value={board[3]}
						chooseSquare={() => {
							chooseSquare(3);
						}}
					/>
					<Square
						value={board[4]}
						chooseSquare={() => {
							chooseSquare(4);
						}}
					/>
					<Square
						value={board[5]}
						chooseSquare={() => {
							chooseSquare(5);
						}}
					/>
				</div>
				<div className="row">
					<Square
						value={board[6]}
						chooseSquare={() => {
							chooseSquare(6);
						}}
					/>
					<Square
						value={board[7]}
						chooseSquare={() => {
							chooseSquare(7);
						}}
					/>
					<Square
						value={board[8]}
						chooseSquare={() => {
							chooseSquare(8);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
