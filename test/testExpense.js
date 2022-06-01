const assert = require('assert');
const { Expense } = require('../src/expense.js');

describe('Expense', () => {
  it('Should equate two expenses', () => {
    const lunch = new Expense('biriyani', 250, 'food');
    const meal = new Expense('biriyani', 250, 'food');
    assert.ok(lunch.equals(meal));
  });
  it('Should return false if expenses are not equal', () => {
    const syrup = new Expense('cough syrup', 80, 'medicine');
    const tablet = new Expense('dolo 650', 10, 'medicine');
    assert.strictEqual(syrup.equals(tablet), false);
  });
});
