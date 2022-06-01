const assert = require('assert');
const { ExpenseReport } = require('../src/expenseReport.js');
const { Expense } = require('../src/expense.js');

describe('expenseReport', () => {
  const milk = new Expense('milk', 50, 'food');
  const oats = new Expense('oats', 150, 'food');

  it('Should equate two reports', () => {
    const report1 = new ExpenseReport();
    const report2 = new ExpenseReport();
    assert.ok(report1.equals(report2));
    assert.strictEqual(report1.equals(report2), true);
    report1.add(milk);
    report2.add(milk);
    assert.ok(report1.equals(report2));
  });
  it('Should return false if two instences are not equal', () => {
    const report1 = new ExpenseReport();
    const report2 = { log: [] };
    assert.strictEqual(report1.equals(report2), false);
    const report3 = new ExpenseReport();
    report1.add(oats);
    assert.strictEqual(report1.equals(report3), false);
  });
});

describe('totalExpenditure', () => {
  const milk = new Expense('milk', 50, 'food');
  const oats = new Expense('oats', 150, 'food');
  const busTicket = new Expense('bus ticket', 40, 'travel');

  it('Should calculate total expense of a day', () => {
    const report1 = new ExpenseReport();
    report1.add(milk);
    assert.strictEqual(report1.totalExpenditure(), 50);
    report1.add(oats);
    report1.add(busTicket);
    assert.strictEqual(report1.totalExpenditure(), 240);
  });
});

describe('totalExpenditureOf', () => {
  const milk = new Expense('milk', 50, 'food');
  const busTicket = new Expense('bus ticket', 40, 'travel');
  const oats = new Expense('oats', 150, 'food');

  it('Should calculate expense of given category', () => {
    const report = new ExpenseReport();
    report.add(milk);
    report.add(busTicket);
    assert.strictEqual(report.totalExpenditureOf('food'), 50);
    assert.strictEqual(report.totalExpenditureOf('travel'), 40);
    report.add(oats);
    assert.strictEqual(report.totalExpenditureOf('food'), 200);
  });
});

describe('categoryStats', () => {
  const milk = new Expense('milk', 50, 'food');
  const busTicket = new Expense('bus ticket', 50, 'travel');
  const oats = new Expense('oats', 100, 'food');
  const movie = new Expense('movie Ticket', 200, 'entertainment');

  it('Should give percentage of each category in total expense', () => {
    const report = new ExpenseReport();
    report.add(milk);
    report.add(busTicket);
    report.add(oats);
    report.add(movie);
    assert.deepStrictEqual(report.categoryStats(), { food: 37.5, travel: 12.5, entertainment: 50 });
  });
});
