import "../styles/main.css";
import {createBoard, Gameboard} from "./gameboard"
import {Ship} from "./main"

const body = document.querySelector("body");

class DomMethods {
    constructor() {}

    gameContainers() {
        const playerBox = document.createElement("div");
        const cpuBox = document.createElement("div");

        playerBox.id = "player-board";
        cpuBox.id = "cpu-board";

        body.append(playerBox, cpuBox)
    }

    gameboardSquares() {
        let newBoard = createBoard();
        const playerBox = document.getElementById("player-board");
        const cpuBox = document.getElementById("cpu-board");

        newBoard.forEach(cord => {
            const playerSquare = document.createElement("div");
            const cpuSquare = document.createElement("div");

            playerSquare.classList.add(`player-${cord}`, "playerSq");
            cpuSquare.classList.add(`cpu-${cord}`, "cpuSq");

            boardEvent([playerSquare, cpuSquare]);
            playerBox.appendChild(playerSquare);
            cpuBox.appendChild(cpuSquare);
        });
    }

    createDOM = () => {
        this.gameContainers();
        this.gameboardSquares();
    }
}

function boardEvent(squares) {
        squares.forEach(sq => {
            sq.addEventListener("click", () => {

            });
        });
}

const dom = new DomMethods();
dom.createDOM();

const ship1 = new Ship(4);
const playerBoard = new Gameboard("player");
const cpuBoard = new Gameboard("cpu");

playerBoard.placeShip([5, 5], "up", ship1);
playerBoard.placeShip([7, 5], "left", ship1);

cpuBoard.placeShip([5, 5], "up", ship1);
cpuBoard.placeShip([7, 5], "left", ship1);


