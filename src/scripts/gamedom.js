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
    }
}


