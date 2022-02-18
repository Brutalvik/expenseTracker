import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import AddExpense from "./components/AddExpense/AddExpense";
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const dataHandler = (expense) => {
    const data = {
      ...expense,
    };
    setExpenses((prevState) => {
      return [data, ...prevState];
    });
  };

  return (
    <div>
      <AddExpense onGetExpense={dataHandler} />
      <Expense expenses={expenses} />
    </div>
  );
};

export default App;
