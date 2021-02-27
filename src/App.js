import {ExpenseTracker} from './components/ExpenseTracker';
import {GlobalProvider} from "./context/GlobalState"
import "./style.css"

function App() {
  return (
    <div className="container">
      <GlobalProvider>
          <div className="">
            <h1 className="fw-lighter text-center">Expense Tracker App</h1>
          </div>
        <ExpenseTracker/>
      </GlobalProvider>
    </div>
  );
}

export default App;
