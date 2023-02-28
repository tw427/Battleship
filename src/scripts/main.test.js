const firstShip = require('./main');

test("Hit function adds 1 damage to ship", () => {
    expect(firstShip.hit()).toBe(1);
});