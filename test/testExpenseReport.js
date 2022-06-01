const assert = require('assert');
const { ExpenseReport } = require('../src/expenseReport.js');

describe('expenseReport', () => {
  it('Should equate two reports', () => {
    const report1 = new ExpenseReport();
    const report2 = new ExpenseReport();
    assert.ok(report1.equals(report2));
    assert.strictEqual(report1.equals(report2), true);
    report1.add(100);
    report2.add(100);
    assert.ok(report1.equals(report2));
  });
  it('Should return false if two instences are not equal', () => {
    const report1 = new ExpenseReport();
    const report2 = { log: [] };
    assert.strictEqual(report1.equals(report2), false);
    const report3 = new ExpenseReport();
    report1.add(400);
    assert.strictEqual(report1.equals(report3), false);
  });
});
