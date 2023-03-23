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
            const coord = [Number(square.dataset.x), Number(square.dataset.y)];
            const ship = new Ship(length + 1);

            if (visualError[0]) {
                return;
            } 

            playerBoard.placeShip(coord, dir, ship);
            playerBoard.ships.push(ship);
            console.log(playerBoard);
        });
    })
}

function shipVisualFX(square, dir, length) {
    const shipArr = [];
            for (let i = 1; i <= length; i++) {
                let nextSq;
                
                switch(dir) {
                    case "up":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) - i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(square, shipArr);
                        break;
                    case "right":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) + i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(square, shipArr);
                        break;
                    case "left":
                        nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) - i}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(square, shipArr);
                        break;
                    case "down":
                        nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) + i}"][data-y="${square.dataset.y}"]`);
                        shipArr.push(nextSq);
                        shipFXStyles(square, shipArr);
                        break;
                }
            }
}

function shipFXStyles(square, shipArr) {
        if (shipArr.every(item => item !== null)) {
            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-ship";
                }
            })
        square.id = "visualize-ship";
        } else {
            shipArr.forEach(item => {
                if (item !== null) {
                    item.id = "visualize-error";
                }
            })
        square.id = "visualize-error";
        }
}