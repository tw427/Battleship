import {cpuBoard} from "./main"

export function boardEvent(square) {
    square.forEach(sq => {
        sq.addEventListener("click", () => {
            if (!sq.classList.contains("ship")) {
                cpuBoard.missedAttack(sq)
            } else if (["ship", "cpuSq"].every(className => sq.classList.contains(className))) {
                    cpuBoard.receiveAttack(sq)
            }
        })
    })
}

// Will probably create a game loop by... Having the AI function be run with a setTimeout after
// the player has attacked... We could display a message of " AI is attacking... " and it will run
// the AI attack function after say 5 seconds

// Step 5
// Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module.