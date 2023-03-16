import { Ship } from "./main"
import { DomMethods } from "./gamedom";
import { Gameboard } from "./gameboard"
const cpuBoard = new Gameboard("cpu", []);

export function startGame() {
    const ship = randomShip();
    const dir = randomDir();
    const coord = randomCoord(dir, ship);
    const dom = new DomMethods();
    
    const playerBoard = new Gameboard("player", []);
    
    console.log(ship)
    console.log(cpuBoard)
    cpuBoard.ships.push(ship);
    dom.createDOM();
    cpuBoard.placeShip(coord, dir, ship);

    // Have to fix a bug where DOM is being initialized before we place ships
    // Causing event listeners in boardEvent() function to label ships existing post-DOM to be labeled as a ' non ship ' div
}

export function randomShip() {
    const randomShip = new Ship(Math.floor(Math.random() * 3) + 2)

    return randomShip

    // Now we have all our random variables for placeShip(coord, dir, ship)
    // place the ship if non of our ships coordinates intercept with the existing ships from cpuBoard.ships
}

function randomMinMaxNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export function randomCoord(dir, ship) {
    let randUpLeft = randomMinMaxNum(ship.length, 10);
    let randDownRight = randomMinMaxNum(1, (10 - ship.length));
    let randAny = randomMinMaxNum(1, 10);
    let coords;

    switch(dir) {
        case "up": 
                coords = [randUpLeft, randAny]
                break;
        case "left":
            coords = [randAny, randUpLeft]
            break;
        case "down":
            coords = [randDownRight, randAny]
            break;
        case "right":
            coords = [randAny, randDownRight]
            break;
    }

    console.log(coords)

    return coords;
}

export function randomDir() {
    const directions = ["up", "left", "right", "down"];
    const randomNum = Math.floor(Math.random() * 4);

    return directions[randomNum];
}


export function boardEvent(square) {
        square.addEventListener("click", () => {
            if (square.classList.contains("ship")) {
                cpuBoard.receiveAttack(square)
            }
            cpuBoard.missedAttack(square)
        })
}


// Will probably create a game loop by... Having the AI function be run with a setTimeout after
// the player has attacked... We could display a message of " AI is attacking... " and it will run
// the AI attack function after say 5 seconds

// Step 5
// Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module.