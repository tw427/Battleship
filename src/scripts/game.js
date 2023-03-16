import { Ship } from "./main"
import { DomMethods } from "./gamedom";
import { Gameboard } from "./gameboard"
const cpuBoard = new Gameboard("cpu", []);
const playerBoard = new Gameboard("player", []);

export function startGame() {
    const dom = new DomMethods();
    dom.createDOM();

    console.log(cpuBoard, playerBoard)

    console.log(randomizeShips())
    // randomizeShips()
    // randomizeShips()
    // randomizeShips()
    // randomizeShips()
    // randomizeShips()
    // randomizeShips()

    // playerBoard.placeShip([5, 5], "up", ship1);
    // playerBoard.placeShip([7, 5], "left", ship2);

    cpuBoard.placeShip([5, 3], "up", randomizeShips());
    // cpuBoard.placeShip([9, 5], "left", ship4);
}

export function randomizeShips() {
    const directions = ["up", "left", "right", "down"];
    const randomShip = new Ship(Math.floor(Math.random() * 3) + 2)

    return randomShip

    // ^ Create random ship to use in placeShip(cord, dir, ship)
    // Retrieve random direction, and then depending on the direction...
    // Set random coordinate if direction is up or down to have a 1 - (10 - randomShip.length) X value so it can fit and whatever 1 - 10 Y value
    // Vice versa if the direction is right or left 1 - 10 X and 1 - (ship length) for Y

    // Now we have all our random variables for placeShip(coord, dir, ship)
    // place the ship if non of our ships coordinates intercept with the existing ships from cpuBoard.ships
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