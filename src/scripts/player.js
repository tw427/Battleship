import { Gameboard } from "./gameboard";
import { Ship } from "./main";

const playerBoard = new Gameboard("player", []);

export function playerBoardEvent(dir, length) {
    const pBoard = document.querySelectorAll("#player-board div");

    pBoard.forEach(square => {
        square.addEventListener("pointerenter", () => {
            shipVisualFX(square, dir, length);
        })

        square.addEventListener("pointerout", () => {
            const visualShip = document.querySelectorAll("#visualize-ship");
            const visualError = document.querySelectorAll("#visualize-error");

            if (visualError.length >= 1) {
                visualError.forEach(err => {
                    err.id = "";
                })
            }

            visualShip.forEach(sq => {
                sq.id = "";
            })
        })
        
        square.addEventListener("click", () => {
            const visualError = document.querySelectorAll("#visualize-error");
            const remainingIndicator = document.getElementById("ship-remaining");
            const coord = [Number(square.dataset.x), Number(square.dataset.y)];
            const ship = new Ship(length + 1);

            if (visualError[0]) {
                return;
            } 

            playerBoard.placeShip(coord, dir, ship);
            playerBoard.ships.push(ship);
            remainingIndicator.textContent = `Ships left: ${4 - playerBoard.ships.length}`

            resetListeners(pBoard);
            console.log(playerBoard);
        });
    })
}

function resetListeners(pBoard) {
    pBoard.forEach(square => {
        const clone = square.cloneNode(true);
        square.parentNode.replaceChild(clone, square)
    })
}

function shipVisualFX(square, dir, length) {
    const shipArr = [square];
            for (let i = 1; i <= length; i++) {
                let nextSq;
                
                switch(dir) {
                    case "up":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) - i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "right":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) + i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "left":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) - i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                    case "down":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) + i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(shipArr);
                        break;
                }
            }
}

function shipFXStyles(shipArr) {
        if (shipArr.every(item => item !== null)) {

            if (shipArr.some(item => item.classList.contains("ship"))) {
                shipArr.forEach(item => {
                    item.id = "visualize-error";
                })
                return;
            }

            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-ship";
                }
            })
        } else {
            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-error";
                }
            })
        }
}