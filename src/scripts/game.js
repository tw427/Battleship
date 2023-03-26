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
    resetListeners(cpuSquares)
    document.querySelector(".cpu-message").textContent = "CPU is making an attack...";
    setTimeout(attack, 0 * 1000);
}

function attack() {
    const x = randomMinMaxNum(1, 10);
    const y = randomMinMaxNum(1, 10);
    let randSq = document.querySelector(`.playerSq[data-x="${x}"][data-y="${y}"]`);

    let square = randomAttack(randSq);

    if (cpuBoard.prevHit == "") {
        square = randomAttack(square);
    } else if (cpuBoard.prevHit == "hit" || cpuBoard.prevHit == "retry") {

        const x = cpuBoard.prevAtk.dataset.x;
        const y = cpuBoard.prevAtk.dataset.y;
        const left = document.querySelector(`.playerSq[data-x="${x}"][data-y="${y - 1}"]`);
        const right = document.querySelector(`.playerSq[data-x="${x}"][data-y="${+y + 1}"]`);
        const above = document.querySelector(`.playerSq[data-x="${x - 1}"][data-y="${y}"]`);
        const below = document.querySelector(`.playerSq[data-x="${+x + 1}"][data-y="${y}"]`);
        const choices = [left, right, above, below];
        let randChoice = choices[0];

        while (randChoice === null || randChoice === undefined || randChoice.id === "hit" || randChoice.classList.contains("miss")) {
            if (choices.length <= 0 || checkChoices(choices)) {
                console.log("if statement fired")
                cpuBoard.prevHit = "";
                randChoice = randomAttack(cpuBoard.prevAtk);
                break;
            }
            
            choices.shift();
            randChoice = choices[0]
        }

        square = randChoice;
        console.log(square)
    }

    if (square.className.includes("ship")) {
        square.id = "hit";
        cpuBoard.prevHit = "hit"
        cpuBoard.prevAtk = square;
        console.log(cpuBoard.prevAtk)
    } else if (cpuBoard.prevHit == "hit" || cpuBoard.prevHit == "retry") {
        square.classList.add("miss");
        cpuBoard.prevHit = "retry"
        console.log(cpuBoard.prevAtk)
    } else {
        square.classList.add("miss");
        cpuBoard.prevHit = "miss"
        cpuBoard.prevAtk = square;
        console.log(cpuBoard.prevAtk)
    }

    // Add a " prevHit " property to cpuBoard class constructor
    // if " prevHit " was a hit we will try adjacent spaces next to the previous attack from cpu
    // Add " prevAtk " to be updated as our cpu's previous attack
    // The logic for our cpu's intelligent will disregard the random attack logic once we have a hit
    // and now it will continue to rely on trying prevAtk and depending on prevHit to destroy a player's ship completely
    // once the game has provided a " Ship has sunk! " message the cpu will now resume random attacks until it prevHit is === "hit"

    document.querySelector(".cpu-message").textContent = `CPU has attacked coordinates ${x}, ${y}!`;
    gameboardEvents();
}

function randomAttack(square) {
    let newSq = square;
    while (newSq.className.includes("miss") || newSq.id == "hit") {
        const newX = randomMinMaxNum(1, 10);
        const newY = randomMinMaxNum(1, 10);
        newSq = document.querySelector(`.playerSq[data-x="${newX}"][data-y="${newY}"]`)
    }
    return newSq;
}

function checkChoices(arr) {
    console.log(arr);
    return arr.every(choice => {
        choice === null || choice === undefined || choice.id === "hit" || choice.classList.contains("miss")
    })
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

    return coords;
}

export function randomDir() {
    const directions = ["up", "left", "right", "down"];
    const randomNum = Math.floor(Math.random() * 4);

    return directions[randomNum];
}