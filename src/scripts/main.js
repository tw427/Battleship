import "../styles/main.css";
import { DomMethods } from "./gameboard_dom";
import {Gameboard} from "./gameboard"

export class Ship {
    constructor(length, id) {
        this.length = length;
        this.id = id;
        this.damage = 0;
        this.sunk = false;
        // Add cordinates when placeShip gets called on Ship object
        // We can run hit when receiveAttack matches one of the Ship object's cordinates
        this.cords = [];
    }
    
    hit(cord) {
        this.damage += 1;
        return this.damage;
    }
    
    isSunk() {
        this.damage == this.length ? this.sunk = true : this.sunk = false;
        return this.sunk;
    }
};

const dom = new DomMethods();
dom.createDOM();

const ship1 = new Ship(4);
const playerBoard = new Gameboard("player");
const cpuBoard = new Gameboard("cpu");

playerBoard.placeShip([5, 5], "up", ship1);
playerBoard.placeShip([7, 5], "left", ship1);

cpuBoard.placeShip([5, 5], "up", ship1);
cpuBoard.placeShip([7, 5], "left", ship1);