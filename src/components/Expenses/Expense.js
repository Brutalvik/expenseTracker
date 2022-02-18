import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import expenses from "../../data/Expenses";
// import ExpenseData from "../data/Expenses.json";
import Card from "../UI/Card";

const Expense = () => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expense;
