class ExpenseReport {
  constructor() {
    this.log = [];
  }

  add(expense) {
    this.log.push(expense);
  }

  totalExpense() {
    return this.log.reduce((total, expense) => total + expense.cost, 0);
  }

  totalExpenseOf(category) {
    return this.log.reduce((total, expense) => {
      if (expense.category === category) {
        total += expense.cost;
      }
      return total;
    }, 0);
  }

  equals(otherReport) {
    return otherReport instanceof ExpenseReport &&
      otherReport.log.length === this.log.length &&
      otherReport.log.every((expense, index) => expense.equals(this.log[index]));
  }
}

exports.ExpenseReport = ExpenseReport;
