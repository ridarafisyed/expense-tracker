import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);

    // seperateing the Income and expense from transactions. 
    const incomeList = transactions.map(transaction => (transaction.isIncome === "y")? transaction.transaction:0)

    const expenseList = transactions.map(transaction => (transaction.isIncome === "n")? transaction.transaction:0)

    // calculating the income and expense as total income and expense 

    const income = incomeList.reduce((acc, item)=>(acc+=item),0).toFixed(2)
    const expense = expenseList.reduce((acc, item)=>(acc+=item),0).toFixed(2)



    return (
        <div className ="jumbotron jumbotron-fluid">
            <div className="text-center">
                <h1>Balance</h1>
                <h6>Rs. <span className="h1">{income - expense}</span></h6>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <div className="card">
                        <div className="card-body green-success text-white">
                            Income <br/> Rs.<span className="h2">{income}</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center">
                    <div className="card">
                        <div className="card-body red-danger text-white">
                            Expense<br/>Rs.<span className="h2">{expense}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
