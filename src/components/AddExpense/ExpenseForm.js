import Form from "../UI/Form";
import Button from "../UI/Button";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="add-expense__controls">
        <Form type="text" title="Title" />
        <Form type="number" title="Amount" min="0.01" step="0.01" />
        <Form type="date" title="Date" min="2019-01-01" max="2024-12-31" />
      </div>
      <div className="add-expense__actions">
        <Button type="submit" text="Add Expense" />
      </div>
    </form>
  );
};

export default ExpenseForm;
