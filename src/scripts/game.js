import {Gameboard} from "./gameboard"
import {Ship} from "./main"

export function boardEvent(squares) {
    squares.forEach(sq => {
        sq.addEventListener("click", () => {

        });
    });
}

const ship1 = new Ship(4);
const playerBoard = new Gameboard("player");
const cpuBoard = new Gameboard("cpu");

playerBoard.placeShip([5, 5], "up", ship1);
playerBoard.placeShip([7, 5], "left", ship1);

cpuBoard.placeShip([5, 5], "up", ship1);
cpuBoard.placeShip([7, 5], "left", ship1);