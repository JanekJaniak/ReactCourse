import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const App = () => {
  const firstExpense =
    {
      id: 'e1',
      title: 'Toilet Paper',
      price: 94.12,
      date: new Date(2020, 7, 14),
    };

  const [expenses, setExpenses] = useState([firstExpense])

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  }

  return (
    <div>
      <NewExpense addNewExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
