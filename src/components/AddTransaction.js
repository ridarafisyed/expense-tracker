import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [amount, setAmount] = useState(0);
    const [source, setSource] = useState(" Enter Source ")
    const [isIncome, setIsIncome] = useState("y");
    
     const { addTransaction } = useContext(GlobalContext);

    //    when user submit the form the data will store into the array object
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),            
            isIncome: isIncome,
            source:source,
            transaction:parseFloat(amount),
        }
    
        addTransaction(newTransaction);    
}; 
    return (
        <div className="container text-center">
            <form onSubmit={handleSubmit}>
                <div className ="form-group">
                    <label className="form-group mx-sm-3 mb-2" htmlFor="Source">Source</label>
                    <input type="text" placeholder="Enter Source" aria-label="source" className="form-control" value={source}
                    onChange={ e => setSource(e.target.value)} id="source"/>
                </div>

                <div className ="form-group">
                    <label className="form-group mx-sm-3 mb-2" htmlFor="amount">Amount</label>
                    <input type="text" aria-label="amount" className="form-control" value={amount}
                    onChange={ e => setAmount(e.target.value)} id="amount"/>
                </div>

                <div className ="form-group">
                    <label className="form-group mx-sm-3 mb-2">Type</label>
                    <select className="form-control" aria-label="type" value={isIncome} onChange={e =>setIsIncome(e.target.value)} >
                        <option value="y">Income</option><option value="n">Expense</option>
                    </select>
                </div>

                <button className="btn btn-primary mx-sm-3 mb-2 center" aria-label="Add Transaction"  type="submit">Add Transaction</button>
            </form>
        </div>
    )
}
