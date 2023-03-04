/**
 * @jest-environment jsdom
 */

const {Ship} = require('./main');


describe("Ship class", () => {
    const firstShip = new Ship(4);

    test("hit function returns an increment of 1 damage", () => {
        expect(firstShip.hit()).toEqual(1);
    });

    test("isSunk function to return true if damage is equal to ship's length", () => {
        // Setting the damage to equal to our ship's length
        firstShip.damage = 4;
        expect(firstShip.isSunk()).toEqual(true);
    });
});
