import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import expenses from "../data/Expenses";
import Card from "../components/Card";

const Expense = () => {
  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
};

export default Expense;
