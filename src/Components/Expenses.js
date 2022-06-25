import {React, useState} from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import './ExpenseItem.css'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
  
  const [filterYear, setFilterYear] = useState("2022")
  const FilterdYearHandler = SelectedYear =>{
    
    setFilterYear(SelectedYear)
   console.log("yes");
  }
  
  return (
    <div>  
    <div className='expenses'>
    <ExpensesFilter SelectedYear={filterYear} onSaveFilterYear = {FilterdYearHandler}/>
    {props.items.map((expense) => <ExpenseItem key={expense.id} title = {expense.title}  amount = {expense.amount}  date = {expense.date} />)}
     </div>
     </div>

  )
}

export default Expenses