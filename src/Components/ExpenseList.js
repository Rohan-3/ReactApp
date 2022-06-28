import ExpenseItem from './ExpenseItem'
import React from 'react'

function ExpenseList(props) {
 
    // Normal JavaScript logic
  let ExpenseContent = <p> No Insurance Sorry!</p>
  if(props.items.length > 0){
    ExpenseContent =  props.items.map((expense) => <ExpenseItem key={expense.id} title = {expense.title}  amount = {expense.amount}  date = {expense.date} />)
  };

}

export default ExpenseList