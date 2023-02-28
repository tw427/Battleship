const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();

    test("placeShip function to return correct position and direction", () => {
        expect(testGB.placeShip(4, "up")).toEqual([4, "up"]);
    });
});