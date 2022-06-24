import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

  // // const ExpenseDate = new Date(2022, 6, 26).toISOString();
  // // const ExpenseTitle = "Car insurance";
  // // const ExpenseAmount = "1000/-"
  // const month = props.date.toLocaleString('en-US', { month: 'long'});
  // const year = props.date.getFullYear();
  // const day = props.date.toLocaleString('en-US', { day: '2-digit'});


    return (
    <div className='expense-item'>
    <ExpenseDate date= {props.date}/>
    <div className='expense-item__description'>
    <h2>{props.title}</h2>
    <div className='expense-item__price'>INR {props.amount}</div>
    </div>
    <button>ClickChange</button>
    </div>
    
  )
}

export default ExpenseItem