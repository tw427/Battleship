/**
 * @jest-environment jsdom
 */

const {randomizeShips} = require('./game')

describe("randomize ships function", () => {
    test("return value of randomizeShips", () => {
        expect(randomizeShips()).toBeLessThan(4)
    })
})