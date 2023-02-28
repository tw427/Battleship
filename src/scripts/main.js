class Ship {
    constructor(length) {
        this.length = length;
        this.damage = 0;
        this.sunk = false;
    }
    
    hit() {
        this.damage += 1;
        return this.damage;
    }
    
    isSunk() {
        this.damage == this.length ? this.sunk = true : this.sunk = false;
        return this.sunk;
    }
};

module.exports = {
    Ship,
}