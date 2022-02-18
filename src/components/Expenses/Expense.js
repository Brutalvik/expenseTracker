import { useState } from "react";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
// import expenses from "../../data/Expenses";
import ExpenseFilter from "./ExpenseFilter";
// import ExpenseData from "../data/Expenses.json";
import Card from "../UI/Card";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("");

  const getFilteredYear = (selected) => {
    setFilteredYear(parseInt(selected));
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={getFilteredYear}
        highlightedYear={filteredYear}
      />
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
      {/* {expenses
        .filter((item) => filteredYear === item.date.getFullYear())
        .map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
    </Card>
  );
};

export default Expense;
