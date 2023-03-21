export class Gameboard {
    constructor(id, ships) {
        this.id = id;
        this.ships = ships;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
    }

    placeShip(cord, dir, ship) {
        for (let i = 0; i < ship.length; i++) {
            let square;
            
            switch(dir) {
                case 'up': 
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] - i}"][data-y="${cord[1]}"]`);
                        ship.cords.push([cord[0] - i, cord[1]]);
                        square.classList.add("ship");
                        break;
                case 'left':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] - i}"]`);
                        ship.cords.push([cord[0], cord[1] - i]);
                        square.classList.add("ship");
                        break;
                case 'right':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0]}"][data-y="${cord[1] + i}"]`);
                        ship.cords.push([cord[0], cord[1] + i]);
                        square.classList.add("ship");
                        break;
                case 'down':
                        square = document.querySelector(`.${this.id}Sq[data-x="${cord[0] + i}"][data-y="${cord[1]}"]`);
                        ship.cords.push([cord[0] + i, cord[1]]);
                        square.classList.add("ship");
                        break;
            }
        }

        return true;
    }

    receiveAttack(square) {
        const message = document.querySelector(".cpu-message")
        
        if (!this.ships.every(ship => ship.sunk == true)) {
            this.ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        message.innerText == "Hit!" ? null : message.innerText = "Hit!"
                    }
                })
            })
        }

        if (this.ships.every(ship => ship.sunk == true)) {
            message.innerText = "All ships have been sunk!";
        }

    }

    missedAttack(square) {
        const message = document.querySelector(".cpu-message")
        message.innerText == "Miss" ? null : message.innerText = "Miss"

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