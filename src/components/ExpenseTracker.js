import React from 'react'
import { AddTransaction } from './AddTransaction'
import { Balance } from './Balance'
import { TransactionList } from './TransactionList'

export const ExpenseTracker = () => {
    return (
        <div className="container">
            
          
            <Balance/>
            
            <AddTransaction/>
            <TransactionList/>
        </div>
    )
}
