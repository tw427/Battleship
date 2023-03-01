const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();

    test("correct position and direction", () => {
        expect(testGB.placeShip([1, 2], "up")).toEqual(["1,2", "up"]);
    });

    test("hit on correct cordinates", () => {
        expect(testGB.receiveAttack(["1,2", "up"])).toEqual("hit");
    });

    test("miss increment on attack miss", () => {
        // Incorrect cordinates to simulate a miss
        testGB.receiveAttack(["2,1", "down"]);

        expect(testGB.miss).toEqual(1);
    });

    test("Gameboard is 10x10", () => {
        expect(testGB.board.length).toEqual(100);
    });
});