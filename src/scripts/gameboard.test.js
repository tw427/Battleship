const {Gameboard} = require('./gameboard');

describe("Gameboard class", () => {
    const testGB = new Gameboard();

    test("return correct position and direction", () => {
        expect(testGB.placeShip(4, "up")).toEqual([4, "up"]);
    });

    test("return hit on correct cordinates", () => {
        expect(testGB.receiveAttack([4, "up"])).toEqual("hit");
    })
});