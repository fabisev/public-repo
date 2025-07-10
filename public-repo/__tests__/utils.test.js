const utils = require('../utils');

describe('Utility Functions', () => {
  test('add function correctly adds two numbers', () => {
    expect(utils.add(2, 3)).toBe(5);
    expect(utils.add(-1, 1)).toBe(0);
    expect(utils.add(0, 0)).toBe(0);
    expect(utils.add(100, 200)).toBe(300);
  });
});