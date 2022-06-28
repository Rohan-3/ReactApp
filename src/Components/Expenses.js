import {React, useState} from 'react'
import './Expenses.css'
import './ExpenseItem.css'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'


function Expenses(props) {
  
  const [filterYear, setFilterYear] = useState("2022");

  const FilterdYearHandler = SelectedYear =>{
     setFilterYear(SelectedYear)
      };

   // Filter(); filters an array 
  //Which pass a function to it which looks like we pass in map()
  // If this function returns true a certain item is kept, if flase not kept around
  // Filter generates a brand new array, It does not add to original array
  //Instead returns new array ,
  // In that new array Certain Items are kept but original Items are not touched
  // That is imp because we dont want to lose the data when filtering (FIlter & Display)

  const FilterExpenseDisplay = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>  
    <div className='expenses'>
    <ExpensesFilter SelectedYear={filterYear} onSaveFilterYear = {FilterdYearHandler}/>
    <ExpenseList items ={FilterExpenseDisplay}/>
     </div>
     </div>

  )
}

export default Expenses