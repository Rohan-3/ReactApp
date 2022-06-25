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
  console.log(filterYear);


  return (
    
    <div>  
    <div className='expenses'>
    <ExpensesFilter SelectedYear={filterYear} onSaveFilterYear = {FilterdYearHandler}/>
     <ExpenseItem title = {props.items[0].title}  amount ={props.items[0].amount} date = {props.items[0].date}/>
     <ExpenseItem title = {props.items[1].title}  amount ={props.items[1].amount} date = {props.items[1].date}/>
     <ExpenseItem title = {props.items[2].title}  amount ={props.items[2].amount} date = {props.items[2].date}/>
     <ExpenseItem title = {props.items[3].title}  amount ={props.items[3].amount} date = {props.items[3].date}/>
     </div>
     </div>

  )
}

export default Expenses