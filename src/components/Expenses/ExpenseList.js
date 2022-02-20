import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = ({ expenses, filteredYear }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === filteredYear;
  });

  return (
    <div className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
