import ExpenseItem from "./components/ExpenseItem";
import expenses from "./data/Expenses";

const App = () => {
  return (
    <div>
      {expenses.map((item) => (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      ))}
    </div>
  );
};

export default App;
