import { ExpenseTracker } from "./components/ExpenseTracker";
import { GlobalProvider } from "./context/GlobalState";
import './style.css'
function App() {
  return (
    <div className="container main">
      <GlobalProvider>
        <div className="title">
        <h1 className="display-5 text-center">Expense Tracker App</h1>
        </div>
        <ExpenseTracker/>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
