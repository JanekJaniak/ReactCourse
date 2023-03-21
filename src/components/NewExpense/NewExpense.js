import { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addNewExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const newExpanseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }

    addNewExpense(newExpenseData);
    setIsEditing(false);
  }

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditing}>Add Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          submitData={newExpanseHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}