import { ship3, ship4 } from "./main";

export class Gameboard {
    constructor(id, ships) {
        this.id = id;
        this.ships = ships;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
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
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] - i}"][data-y="${cord[1]}"]`);
                                ship.cords.push([cord[0] - i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
                case 'left': if (cord[1] - ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] - i}"]`);
                                ship.cords.push([cord[0], cord[1] - i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'right': if (cord[1] + ship.length < 1) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] + i}"]`);
                                ship.cords.push([cord[0], cord[1] + i]);
                                square.classList.add("ship");
                                break;
                            }
                case 'down': if (cord[0] + ship.length > 10) {
                                break;
                            } else {
                                const square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] + i}"][data-y="${cord[1]}"]`);
                                ship.cords.push([cord[0] + i, cord[1]]);
                                square.classList.add("ship");
                                break;
                            }
            }
        }

        return true;
    }

    receiveAttack(square) {
        const ships = [ship3, ship4];
        
        if (!ships.every(ship => ship.sunk == true)) {
            ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        // console.log(ship)
                        // console.log(this)
                    }
                })
            })
        }

        if (ships.every(ship => ship.sunk == true)) {
            const message = document.querySelector(".sunk-message")
            message.classList.remove("message-hidden")
        }
    }

    missedAttack(square) {
        square.classList.add("miss")
        this.miss++;
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