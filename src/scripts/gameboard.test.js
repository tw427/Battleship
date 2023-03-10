/**
 * @jest-environment jsdom
 */

const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();
    // const square = document.querySelector("[data-x='2'][data-y='3'].cpuSq");

    test("correct position and direction", () => {
        expect(testGB.placeShip([1, 2], "up", [])).toEqual(true);
    });

    test("Gameboard is 10x10", () => {
        expect(testGB.board.length).toEqual(100);
    });

    test.skip("hit on correct cordinates", () => {
        expect(testGB.receiveAttack(square)).toEqual("hit");
    });

    test.skip("miss increment on attack miss", () => {
        // Incorrect cordinates to simulate a miss
        testGB.receiveAttack(["2,1", "down", []]);

        expect(testGB.miss).toEqual(1);
    });

});