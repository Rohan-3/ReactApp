import './App.css';
import { useState, useEffect } from 'react';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const INITAIL_DATA = [
  { id: "e1",
   title: "Cars insurance",
   amount: "1000/-",
   date: new Date(2022, 5, 23)
  },
  { id: "e2",
   title: "Home insurance",
   amount: "2000/-",
   date: new Date(2022, 6, 23)
  },
  { id: "e3",
   title: "Bike insurance",
   amount: "500/-",
   date: new Date(2022, 7, 23)
  },
  { id: "e4",
   title: "Life insurance",
   amount: "2000/-",
   date: new Date(2022, 8, 23)
  }
]


function App() {

  const [expenses, setExpenses] = useState(INITAIL_DATA)
  
  useEffect(() => {
    console.log(expenses, "expensedemo");
  }, [expenses])
  

    const onAddExpenseHandler = expense =>{
      setExpenses((prevExpenses) =>{
       return [expense, ...prevExpenses]
      })
      console.log(expense);
    }

    
  return (
    <div className="App">
     <h1>Welcome Boi</h1>
     
     <NewExpense onAddExpense={onAddExpenseHandler}/>
     <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
