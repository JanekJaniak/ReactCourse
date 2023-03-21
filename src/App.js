import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import { NewExpense } from './components/NewExpense/NewExpense';

const App = () => {
  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      price: 94.12,
      date: new Date(2023, 2, 22),
    },
    {
      id: 'e2',
      title: 'Bike',
      price: 9994.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e3',
      title: 'car',
      price: 9994.12,
      date: new Date(2023, 8, 14),
    },
  ]

  const [expenses, setExpenses] = useState(initialExpenses)

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
