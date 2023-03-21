import { ExpenseItem } from './ExpenseItem';
import './ExpensesList.css';

export const ExpensesList = ({filteredExpenses}) => {
  if(filteredExpenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </ul>
  ) 
}