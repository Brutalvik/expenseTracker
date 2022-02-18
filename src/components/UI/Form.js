import "./Form.css";

const ExpenseForm = ({ title, type, value, min, max, step, onchange }) => {
  return (
    <div className="add-expense__control">
      <label>{title}</label>
      <input
        type={type}
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={onchange}
      />
    </div>
  );
};

export default ExpenseForm;
