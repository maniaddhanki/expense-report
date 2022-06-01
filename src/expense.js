class Expense {
  constructor(title, cost, category) {
    this.title = title;
    this.cost = cost;
    this.category = category;
  }

  equals(otherExpense) {
    return otherExpense instanceof Expense &&
      otherExpense.title === this.title &&
      otherExpense.cost === this.cost &&
      otherExpense.category === this.category;
  }
}

exports.Expense = Expense;
