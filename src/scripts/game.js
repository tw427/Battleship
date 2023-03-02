import { playerBoard, cpuBoard } from "./main";

export function boardEvent(squares) {
    squares.forEach(sq => {
        sq.addEventListener("click", () => {
            // Realistically there should only be an event listener for the cpu board
            // since you shouldn't be allowed to click on your own board as a player
            // but the cpu AI will be attacking player board so we still need to see our own board
            if (["ship", "playerSq"].every(className => sq.classList.contains(className))) {
                console.log(playerBoard)
            } else if (["ship", "cpuSq"].every(className => sq.classList.contains(className))) {
                console.log(cpuBoard)
            }
            return;
        });
    });
}

// Will probably create a game loop by... Having the AI function be run with a setTimeout after
// the player has attacked... We could display a message of " AI is attacking... " and it will run
// the AI attack function after say 5 seconds

// Step 5
// Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module.