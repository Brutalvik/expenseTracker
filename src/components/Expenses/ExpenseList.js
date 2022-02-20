import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";

export const ExpenseList = ({ expenses, filteredYear }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === filteredYear;
  });

  return (
    <div>
      <div>
        <ExpensesChart expenses={filteredExpenses} />
      </div>
      <div className="expenses-list">
        {filteredExpenses.length === 0 && (
          <h4 className="expenses-list__fallback">No Expenses Found</h4>
        )}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
