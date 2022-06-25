import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';


function App() {

    const expenses = [
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

    const onAddExpenseHandler = expense =>{
      console.log("yes or no");
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
