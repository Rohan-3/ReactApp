import {React, useState, } from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {

 const [title, setTitle] = useState(props.title) 
const ChangeMe =()=>{
  setTitle("YouChangedMe");
console.log("Yesysysyvjs");
}

    return (
    <div className='expense-item'>
    <ExpenseDate date= {props.date}/>
    <div className='expense-item__description'>
    <h2>{title}</h2>
    <div className='expense-item__price'>INR {props.amount}</div>
    </div>
    <button onClick={ChangeMe}>ClickChange</button>
    </div>
  )
}

export default ExpenseItem