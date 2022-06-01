const { deepEqual } = require('./deepEqual.js');

class ExpenseReport {
  constructor() {
    this.log = [];
  }

  add(expense) {
    this.log.push(expense);
  }

  equals(otherReport) {
    return otherReport instanceof ExpenseReport &&
      deepEqual(this.log, otherReport.log);
  }
}

exports.ExpenseReport = ExpenseReport;
