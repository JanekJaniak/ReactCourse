import { useState } from 'react';
import './ExpenseForm.css';

export const ExpenseForm = ({submitData}) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  // const [formData, setFormData ] =  
  //   useState({
  //     title: '',
  //     price: '',
  //     date: ''
  //   })
    //useState with multiple states

  const titleChangeHandler = (event) => {
    // setFormData({
    //   ...formData,
    //   title: event.target.value
    // });
    //this way you are not guaranteed to work with the latest state snapshot, don't do that
    
    // setFormData((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value
    //   }
    // })
    //this way you ensure that you are always working with the latest state snapshot

    setTitle(event.target.value);
  }

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
      
    const expenseData = {
      title,
      price,
      date: new Date(date)
    }

    submitData(expenseData);

    setTitle('');
    setPrice('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input type='number' min='1' step='1' value={price} onChange={priceChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2020.01.01' max="2023.12.31" value={date} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
