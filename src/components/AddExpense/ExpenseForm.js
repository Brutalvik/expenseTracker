import { useState } from "react";
import Form from "../UI/Form";
import Button from "../UI/Button";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredTitle);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-expense__controls">
        <Form type="text" title="Title" onchange={titleHandler} />
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
