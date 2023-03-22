// import "../styles/main.css";
import {createBoard} from "./gameboard"
import {cpuBoard, resetGame} from "./game";

const body = document.querySelector("body");

export class DomMethods {
    constructor() {}

    gameContainers() {
        const playerBox = document.createElement("div");
        const cpuBox = document.createElement("div");

        playerBox.id = "player-board";
        cpuBox.id = "cpu-board";

        body.append(playerBox, cpuBox)
    }

    gameboardSquares() {
        let newBoard = createBoard();
        const playerBox = document.getElementById("player-board");
        const cpuBox = document.getElementById("cpu-board");

        newBoard.forEach(cord => {
            const playerSquare = document.createElement("div");
            const cpuSquare = document.createElement("div");
            const splitCords = cord.split("-");

            playerSquare.setAttribute("data-x", splitCords[0]);
            playerSquare.setAttribute("data-y", splitCords[1]);
            cpuSquare.setAttribute("data-x", splitCords[0]);
            cpuSquare.setAttribute("data-y", splitCords[1]);
            playerSquare.classList.add("playerSq");
            cpuSquare.classList.add("cpuSq");

            playerBox.appendChild(playerSquare);
            cpuBox.appendChild(cpuSquare);
        });
    }

    gameboardEvents() {
        const cpuSquares = document.querySelectorAll(".cpuSq");
        cpuSquares.forEach(square => {
            square.addEventListener("click", () => {
                if (square.classList.contains("ship")) {
                    cpuBoard.receiveAttack(square)
                } else {
                    cpuBoard.missedAttack(square)
                }
            })
        })
    }

    boardMessages() {
        const cpuMessage = document.createElement("div");
        const plyrMessage = document.createElement("div");
        cpuMessage.classList.add("cpu-message")
        plyrMessage.classList.add("plyr-message")
        body.append(cpuMessage, plyrMessage);
    }

    resetButton() {
        const btn = document.createElement("button");
        btn.textContent = "Reset"
        btn.setAttribute("id", "reset");

        btn.addEventListener("click", () => {
            this.resetDOM()
            resetGame()
        })
        body.appendChild(btn)
    }

    addShipForm() {
        const addForm = document.createElement("form");

        const lengthLabel = document.createElement("label");
        const dirLabel = document.createElement("label");

        lengthLabel.setAttribute("for", "ship-length");
        dirLabel.setAttribute("for", "ship-dir");

        const length = document.createElement("select");
        const lengthOptions = [2, 3, 4];
        const direction = document.createElement("select");
        const dirOptions = ["up", "right", "left", "down"];
        
        addForm.id = "ship-form";
        length.id = "ship-length";
        direction.id = "ship-dir";

        this.dropdownOptions(lengthOptions, length);
        this.dropdownOptions(dirOptions, direction);

        const addShip = document.createElement("button");
        addShip.id = "add-ship"
        addShip.textContent = "Add Ship";

        addForm.append(lengthLabel, length, dirLabel, direction, addShip);
        body.appendChild(addForm);
    }

    addShipBtnEvent() {
        const addShip = document.getElementById("add-ship");
        
        addShip.addEventListener("click", (e) => {
            e.preventDefault();
            const direction = document.getElementById("ship-dir");
            const length = document.getElementById("ship-length");
            this.playerBoardEvent(direction.value, Number(length.value) - 1);
        })
    }
    
    playerBoardEvent(dir, length) {
        const pBoard = document.querySelectorAll("#player-board div");
        pBoard.forEach(square => {
            square.addEventListener("pointerenter", () => {
                const shipArr = [];
                for (let i = 1; i <= length; i++) {
                    let nextSq;
                    
                    switch(dir) {
                        case "up":
                            nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) - i}"][data-y="${square.dataset.y}"]`);
                            shipArr.push(nextSq);
                            this.shipVisuals(square, shipArr);
                            break;
                        case "right":
                            nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) + i}"]`);
                            shipArr.push(nextSq);
                            this.shipVisuals(square, shipArr);
                            break;
                        case "left":
                            nextSq = document.querySelector(`.playerSq[data-x="${square.dataset.x}"][data-y="${Number(square.dataset.y) - i}"]`);
                            shipArr.push(nextSq);
                            this.shipVisuals(square, shipArr);
                            break;
                        case "down":
                            nextSq = document.querySelector(`.playerSq[data-x="${Number(square.dataset.x) + i}"][data-y="${square.dataset.y}"]`);
                            shipArr.push(nextSq);
                            this.shipVisuals(square, shipArr);
                            break;
                    }
                }
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
            // Click event to finalize decision of ship
        })
    }

    shipVisuals(square, shipArr) {
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

    dropdownOptions(options, element) {
            for (let i = 0; i < options.length; i++) {
                const option = document.createElement("option");
                option.setAttribute("value", `${options[i]}`);
                option.textContent = `${options[i]}`;
                element.appendChild(option);
            }
    }

    resetDOM() {
        const cpuSquares = document.querySelectorAll(".cpuSq");
        const cpuMessage = document.querySelector(".cpu-message");

        cpuMessage.textContent = ""

        cpuSquares.forEach(square => {
            square.classList.contains("miss") ? square.classList.remove("miss") : square.id = "";
            square.classList.contains("ship") ? square.classList.remove("ship") : null;
        });
    
    }

    createDOM = () => {
        this.gameContainers();
        this.gameboardSquares();
        this.boardMessages();
        this.resetButton();
        this.addShipForm();
        this.addShipBtnEvent();
    }
}


