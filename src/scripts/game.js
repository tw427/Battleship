import { Ship } from "./main"
import { DomMethods, gameboardEvents, observeBoard, resetListeners } from "./gamedom";
import { Gameboard } from "./gameboard"
export const cpuBoard = new Gameboard("cpu", []);

export function createDOM() {
    const dom = new DomMethods();
    dom.createDOM();
}

export function startGame() {
    cpuShips();
    gameboardEvents();
    observeBoard();
}

export function resetCPU() {
    cpuBoard.hit = 0;
    cpuBoard.miss = 0;
    cpuBoard.ships = [];
}

export function cpuAttack() {
    const cpuSquares = document.querySelectorAll("#cpu-board div");
    console.log("Working")
    resetListeners(cpuSquares)
    document.querySelector(".cpu-message").textContent = "CPU is making an attack...";
    setTimeout(attack, 3 * 1000);
}

function attack() {
    const x = randomMinMaxNum(1, 10);
    const y = randomMinMaxNum(1, 10);

    let square = document.querySelector(`.playerSq[data-x="${x}"][data-y="${y}"]`);
    console.log(square);

    while (square.className.includes("miss") || square.id == "hit") {
        const newX = randomMinMaxNum(1, 10);
        const newY = randomMinMaxNum(1, 10);
        square = document.querySelector(`.playerSq[data-x="${newX}"][data-y="${newY}"]`)
        console.log(square);
    }

    if (square.className.includes("ship")) {
        square.id = "hit";
    } else {
        square.classList.add("miss");
    }

    document.querySelector(".cpu-message").textContent = `CPU has attacked coordinates ${x}, ${y}!`;
    setTimeout(gameboardEvents, 2 * 1000);
}

function cpuShips() {
    while(cpuBoard.ships.length < 4) {
        const ship = new Ship(Math.floor(Math.random() * 3) + 2);
        const dir = randomDir();
        const coord = randomCoord(dir, ship);
        const shipCoords = getShipCoords(coord, dir, ship);

        if (matchingCoord(shipCoords)) {
            continue;
        } else {
            cpuBoard.placeShip(coord, dir, ship);
            cpuBoard.ships.push(ship);
        }
    }
}

function matchingCoord(coordArr) {
    for (let placedShip of cpuBoard.ships) {
        if (placedShip.cords.some(coord => coordArr.some(shipCord => shipCord[0] == coord[0] && shipCord[1] == coord[1]))) {
            return true;
        }
    }
}

function getShipCoords(cord, dir, ship) {
    let coordArr = [];

    for (let i = 0; i < ship.length; i++) {
        switch(dir) {
            case 'up': 
                    coordArr.push([cord[0] - i, cord[1]]);
                    break;
            case 'left':
                    coordArr.push([cord[0], cord[1] - i]);
                    break;
            case 'right':
                    coordArr.push([cord[0], cord[1] + i]);
                    break;
            case 'down':
                    coordArr.push([cord[0] + i, cord[1]]);
                    break;
        }
    }

    return coordArr;
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

    console.log(coords, dir, ship.length)

    return coords;
}

export function randomDir() {
    const directions = ["up", "left", "right", "down"];
    const randomNum = Math.floor(Math.random() * 4);

    return directions[randomNum];
}


// Will probably create a game loop by... Having the AI function be run with a setTimeout after
// the player has attacked... We could display a message of " AI is attacking... " and it will run
// the AI attack function after say 5 seconds

// Step 5
// Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module.