import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addNewExpense }) => {
  const newExpanseHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString()
    }

    addNewExpense(newExpenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm submitData={newExpanseHandler}/>
    </div>
  )
}