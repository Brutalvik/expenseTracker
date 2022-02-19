import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = ({ expenses, filteredYear }) => {
  return (
    <div className="expenses-list">
      {expenses
        .filter((expense) => expense.date.getFullYear() === filteredYear)
        .map((expense) => (
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
