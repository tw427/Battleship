/**
 * @jest-environment jsdom
 */

const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();

    test("correct position and direction", () => {
        expect(testGB.placeShip([1, 2], "up", [])).toEqual(true);
    });

    test("Gameboard is 10x10", () => {
        expect(testGB.board.length).toEqual(100);
    });
    // Rewrite receiveAttack tests once receiveAttack is finished

    test.skip("hit on correct cordinates", () => {
        expect(testGB.receiveAttack(["1,2", "up"])).toEqual("hit");
    });

    test.skip("miss increment on attack miss", () => {
        // Incorrect cordinates to simulate a miss
        testGB.receiveAttack(["2,1", "down", []]);

        expect(testGB.miss).toEqual(1);
    });

});