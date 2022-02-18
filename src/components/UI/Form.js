import "./Form.css";

const ExpenseForm = ({ title, type, min, max, step }) => {
  return (
    <div className="add-expense__control">
      <label>{title}</label>
      <input type={type} min={min} max={max} step={step} />
    </div>
  );
};

export default ExpenseForm;
