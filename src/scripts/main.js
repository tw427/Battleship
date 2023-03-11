import "../styles/main.css";
import { DomMethods } from "./gamedom";
import { Gameboard } from "./gameboard"
import { getShips } from "./game";

export class Ship {
    constructor(length, id) {
        this.length = length;
        this.id = id;
        this.damage = 0;
        this.sunk = false;
        this.cords = [];
    }
    
    hit() {
        this.damage == this.length - 1 ? this.isSunk() : this.damage++;
        return this.damage;
    }
    
    isSunk() {
        this.sunk = true;
        this.damage++;
        return this.sunk;
    }
};

const dom = new DomMethods();
dom.createDOM();

export const ship1 = new Ship(4, 1);
export const ship2 = new Ship(4, 2);
export const ship3 = new Ship(4, 1);
export const ship4 = new Ship(4, 2);

export const playerBoard = new Gameboard("player", [ship1, ship2]);
export const cpuBoard = new Gameboard("cpu", [ship3, ship4]);

playerBoard.placeShip([5, 5], "up", ship1);
playerBoard.placeShip([7, 5], "left", ship2);

cpuBoard.placeShip([5, 3], "up", ship3);
cpuBoard.placeShip([9, 5], "left", ship4);