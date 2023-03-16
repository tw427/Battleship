/**
 * @jest-environment jsdom
 */

const {randomShip} = require('./game')

describe("randomize ships function", () => {
    test("return value of randomizeShips", () => {
        expect(randomShip().length).toBeLessThan(4)
    })
})