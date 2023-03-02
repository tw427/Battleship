import { playerBoard, cpuBoard } from "./main";

export function boardEvent(squares) {
    squares.forEach(sq => {
        sq.addEventListener("click", () => {
            if (["ship", "playerSq"].every(className => sq.classList.contains(className))) {
                // playerBoard.hit();
                console.log(playerBoard)
            } else if (["ship", "cpuSq"].every(className => sq.classList.contains(className))) {
                console.log(cpuBoard)
            }

            return;
        });
    });
}