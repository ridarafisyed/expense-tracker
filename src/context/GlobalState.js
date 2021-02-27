import React,{createContext, useReducer} from 'react'
import AppReducer from "./AppReducer"

// initial state to provide data througout our app

const initialState = {transactions:[
        {
            id: 1,
            isIncome: "y",
            text:"Salary",
            transaction:500.00,
        },
        {
            id: 2,
            isIncome: "n",
            text:"Book",
            transaction:75.00,
        },
        {
            id: 3,
            isIncome: "n",
            text:"Shirt",
            transaction:50.00,
        },
        {
            id: 4,
            isIncome: "y",
            text:"Salary2",
            transaction:450.00,
        },
    ]}

// create context 
export const GlobalContext = createContext(initialState)


// provider components 
export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Action for delete transactions
    function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

    return(
        <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction,
        addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}

