export class Gameboard {
    constructor(id, ships, opponent) {
        this.id = id;
        this.ships = ships;
        this.opponent = opponent;
        this.board = createBoard();
        this.miss = 0;
        this.hit = 0;
        this.prevHit = "";
        this.prevAtk = "";
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
        const message = document.querySelector(`.${this.id}-message`)
        
        if (!this.ships.every(ship => ship.sunk == true)) {
            this.ships.forEach(ship => {
                ship.cords.some(cord => {
                    if(cord[0] == square.dataset.x && cord[1] == square.dataset.y) {
                        ship.hit()
                        square.id = "hit";
                        ship.sunk == false ? this.hit++ : null;
                        message.innerText == `${this.opponent} hit!` ? null : message.innerText = `${this.opponent} hit!`, 2000;
                    }
                })
            })
        }

        if (this.ships.every(ship => ship.sunk == true)) {
            this.allSunk(message);
        }

    }

    missedAttack(square) {
        const message = document.querySelector(`.${this.id}-message`)
        message.innerText == `${this.opponent} missed!` ? null : message.innerText = `${this.opponent} missed!`, 2000

        square.classList.add("miss")
        this.miss++;
    }

    allSunk(msg) {
        msg.innerText = `All of ${this.id}'s ships have been sunk!`;
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