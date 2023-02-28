import {Ship} from './main';

export class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.hit = 0;
        this.miss = 0;
        // Fill this.ships with ships from placeShip
        this.ships = [];
    }

    createBoard() {
        let boardArr = [];

        let x = 1;
        let y = 1;

        while(y <= 10 && x <= 10) {
            if(x == 10 && y == 10) {
                boardArr.push([x, y])
                return boardArr;
            }

            if (y == 10) {
                boardArr.push([x, y])
                x++
                y = 1;
            }

            boardArr.push([x, y]);
            y++
        }
    }
    // Current code is for Tests
    placeShip(x, dir) {
        const directions = ["up", "left", "right", "down"];
        if (x < 1 || x > 10 || !directions.includes(dir)) {
            return;
        }
        // Place ship at x position laid out towards ( dir )
        // e.g place ship at 4 [ up, left, right, down ]

        // If down or up then take y and increment or decrement by 1 of each ship.length
        // if right or left then take y and increment or decrement the value by 1 of each ship.length
        const position = [x, dir];
        return position;
    }
    // Current code is for Tests
    receiveAttack(cord) {
        const cordMatch = (val) => cord.includes(val);

        // Will have to change these parameters to an actual attack
        // This assumes we already have a ship in place on the board
        // Which means we will have to test if the ( cord ) matches an existing ship on [x, y] cordinates
        // Need a way to track Gameboard and Ships on said Gameboard.


        
        if(this.placeShip(4, "up").every(cordMatch)) {
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

const test = new Gameboard();

console.log(test)