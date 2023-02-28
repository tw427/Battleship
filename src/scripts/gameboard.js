import {Ship} from './main';

export class Gameboard {
    constructor(ship) {
        this.ship = ship;
        this.hit = 0;
        this.miss = 0;
    }

    placeShip(x, dir) {
        const directions = ["up", "left", "right", "down"];
        if (x < 1 || x > 10 || !directions.includes(dir)) {
            return;
        }

        // Place ship at x position laid out towards ( dir )
        // e.g place ship at 4 [ up, left, right, down ]

        // If down or up then take y and increment or decrement by 1 of each ship.length
        // if right or left then take y and increment or decrement the value by 1 of each ship.length

        const position = [x, dir];
        return position;
    }

    receiveAttack(cord) {
        const cordMatch = (val) => cord.includes(val);

        if(this.placeShip(4, "up").every(cordMatch)) {
            return "hit";
        }
        
        this.miss += 1;
        return "miss";
    }
}