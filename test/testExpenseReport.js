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

describe('totalExpense', () => {
  const milk = new Expense('milk', 50, 'food');
  const oats = new Expense('oats', 150, 'food');
  const busTicket = new Expense('bus ticket', 40, 'travel');

  it('Should calculate total expense of a day', () => {
    const report1 = new ExpenseReport();
    report1.add(milk);
    assert.strictEqual(report1.totalExpense(), 50);
    report1.add(oats);
    report1.add(busTicket);
    assert.strictEqual(report1.totalExpense(), 240);
  });
});

describe('totalExpenseOf', () => {
  const milk = new Expense('milk', 50, 'food');
  const busTicket = new Expense('bus ticket', 40, 'travel');
  const oats = new Expense('oats', 150, 'food');

  it('Should calculate expense of given category', () => {
    const report = new ExpenseReport();
    report.add(milk);
    report.add(busTicket);
    assert.strictEqual(report.totalExpenseOf('food'), 50);
    assert.strictEqual(report.totalExpenseOf('travel'), 40);
    report.add(oats);
    assert.strictEqual(report.totalExpenseOf('food'), 200);
  });
});
