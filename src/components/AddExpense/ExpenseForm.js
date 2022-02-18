import { useState } from "react";
import Form from "../UI/Form";
import Button from "../UI/Button";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: e.target.value };
    });
  };

  const amountHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: e.target.value };
    });
  };

  const dateHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    console.log(formData);
    setUserInput((...prevState) => {
      return {
        ...prevState,
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-expense__controls">
        <Form
          type="text"
          title="Title"
          value={userInput.enteredTitle}
          onchange={titleHandler}
        />
        <Form
          type="number"
          title="Amount"
          min="0.01"
          step="0.01"
          value={userInput.enteredAmount}
          onchange={amountHandler}
        />
        <Form
          type="date"
          title="Date"
          min="2019-01-01"
          max="2024-12-31"
          value={userInput.enteredDate}
          onchange={dateHandler}
        />
      </div>
      <div className="add-expense__actions">
        <Button type="submit" text="Add Expense" />
      </div>
    </form>
  );
};

export default ExpenseForm;
