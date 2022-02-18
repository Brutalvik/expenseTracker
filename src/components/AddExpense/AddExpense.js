import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = ({ onGetExpense }) => {
  const expenseDataHandler = (expenses) => {
    const expenseData = {
      ...expenses,
      id: Math.random().toString(),
    };
    onGetExpense(expenseData);
  };

  return (
    <div className="add-expense">
      <ExpenseForm onGetExpenseData={expenseDataHandler} />
    </div>
  );
};

export default AddExpense;
