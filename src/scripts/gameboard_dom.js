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
            playerSquare.classList.add(`p${cord}`, "playerSq");
            cpuSquare.classList.add(`c${cord}`, "cpuSq");
            playerBox.appendChild(playerSquare);
            cpuBox.appendChild(cpuSquare);
        });
    }

    createDOM = () => {
        this.gameContainers();
        this.gameboardSquares();
    }
}

const dom = new DomMethods();
dom.createDOM();

const ship1 = new Ship(4);
const testing = new Gameboard();
testing.placeShip([5, 5], "up", ship1);


