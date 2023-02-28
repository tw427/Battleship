class Ship {
    constructor(length, health, sunk) {
        this.length = length;
        this.health = health;
        this.sunk = sunk;
    }

    hit() {
        hit += 1;
    }

    isSunk() {
        this.health == this.length ? this.sunk = true : this.sunk = false;
    }
}