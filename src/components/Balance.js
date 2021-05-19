
import React, { useContext } from 'react'
import {GlobalContext }from "../context/GlobalState"

export const Balance = () => {
    
    const { transactions }= useContext(GlobalContext);
    
    // saperating the incomeList and Expense list 
    const incomeList = transactions.map(transaction => (transaction.isIncome === "y")? transaction.transaction: 0 )
    const expenseList = transactions.map(transaction => (transaction.isIncome === "n")? transaction.transaction: 0 )

    // calculating income and expense as total income and total expense 
    const income = incomeList.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    const expense  = expenseList.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    
    return (
        <div className="jumbotron jumbotron-fluid ">
            <div className="text-center">
                <h5>Your Balance</h5>
                <h6>Rs.<span className="h1">{income - expense}</span></h6>
            </div>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <div className="card">
                    <div className="card-body bg-success text-white">
                        Your Income: Rs.<span className="h2">+{income}</span>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 text-center">
                    <div className="card">
                    <div className="card-body bg-danger text-white">
                        Your Expense: Rs.<span className="h2">-{expense}</span>
                    </div>
                    </div>
                </div>
                </div>                
                </div>
           
        
    )
}
