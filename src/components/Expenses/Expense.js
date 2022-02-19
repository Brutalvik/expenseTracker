import { useState } from "react";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";

const Expense = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState(0);
  // const [filteredExpenses, setFilteredExpenses] = useState([]);

  const getFilteredYear = (selected) => {
    setFilteredYear(parseInt(selected));
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={getFilteredYear}
        highlightedYear={filteredYear}
      />
      <ExpenseList expenses={expenses} filteredYear={filteredYear} />
    </Card>
  );
};

export default Expense;
