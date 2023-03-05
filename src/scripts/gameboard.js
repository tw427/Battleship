import { boardEvent } from "./game";

export class Gameboard {
    constructor(id, ships) {
        this.id = id;
        this.ships = ships;
        this.board = createBoard();
        // this.hit = 0;
        // this.miss = 0;
        // Fill this.ships with ships from placeShip
    }

    placeShip(cord, dir, ship) {
        const directions = ["up", "left", "right", "down"];
        if (   cord[0] < 1 
            || cord[1] < 1
            || cord[0] > 10
            || cord[1] > 10
            || cord.length !== 2
            || !directions.includes(dir)) {
            return;
        }

        for (let i = 0; i < ship.length; i++) {
            switch(dir) {
                case 'up': if (cord[0] - ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}-${cord[0] - i}-${cord[1]}`);
                                boardEvent(square);
                                ship.cords.push([cord[0] - i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
                case 'left': if (cord[1] - ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}-${cord[0]}-${cord[1] - i}`);
                                boardEvent(square);
                                ship.cords.push([cord[0], cord[1] - i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'right': if (cord[1] + ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}-${cord[0]}-${cord[1] + i}`);
                                boardEvent(square);
                                ship.cords.push([cord[0], cord[1] + i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'down': if (cord[0] + ship.length > 10) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}-${cord[0] + i}-${cord[1]}`);
                                boardEvent(square);
                                ship.cords.push([cord[0] + i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
            }
        }

        return true;
    }
    // Current code is for Tests
    receiveAttack(cord) {
        const cordMatch = (val) => cord.includes(val);

        // Will have to change these parameters to an actual attack
        // This assumes we already have a ship in place on the board
        // Which means we will have to test if the ( cord ) matches an existing ship on [x, y] cordinates
        // Need a way to track Gameboard and Ships on said Gameboard.
        
        if(this.placeShip([1, 2], "up", []).every(cordMatch)) {
            return "hit";
        }

        this.miss += 1;
        return "miss";
    }

    allSunk() {
        // Report if all ships have been sunk on any given player's board
        // Players will each initiate a Gameboard class for their own side to place ships
        // Will check the this.ships array and if all objects return sunk to be true
    }
}

export function createBoard() {
    let boardArr = [];

    let x = 1;
    let y = 1;

    while(y <= 10 && x <= 10) {
        if(x == 10 && y == 10) {
            boardArr.push(`${x}-${y}`)
            return boardArr;
        }

        if (y == 10) {
            boardArr.push(`${x}-${y}`)
            x++
            y = 1;
        }

        boardArr.push(`${x}-${y}`);
        y++
    }
}