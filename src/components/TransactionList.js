import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    
    const {transactions} = useContext(GlobalContext);
    


    return (
        <div>
            <h3 className="text-center">Transaction History</h3>
            <ul className="list-group">
                {transactions.map((transaction)=>(
                    <Transaction key={transaction.id} transaction ={transaction}/>
                ))}
                
            </ul>
        </div>
    )
}
