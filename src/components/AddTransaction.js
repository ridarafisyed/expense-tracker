import React ,{useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const AddTransaction = () => {
    // for input type
    const [amount, setAmount] = useState(0);
    const [name, setName] = useState(" Enter Source");
    const [typeValue, setTypeValue] = useState("y");

    const { addTransaction } = useContext(GlobalContext);

    //    when user submit the form the data will store into the array object
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),            
            isIncome: typeValue,
            text:name,
            transaction:parseFloat(amount),
        }
    
        addTransaction(newTransaction);    
}; 
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                <label className="form-group mx-sm-3 mb-2" htmlFor="source">
                    Source</label>
                    <input type="text" placeholder="Enter Source" aria-label="source" className="form-control" value={name} id="name" onChange= {e => setName(e.target.value)} name="Name" />
                </div>
                <div className="form-group">
                 <label className="form-group mx-sm-3 mb-2" htmlFor="inputAmout">
                    Amount:</label>
                    <input type="text" aria-label="amount" className="form-control" value={amount} id="inputAmount"onChange= {e => setAmount(e.target.value)} name="Amount" />                
                </div>
                <div className="form-group">
                    <label className="form-group mx-sm-3 mb-2">Type</label>
                    <select className="form-control" aria-label="type" value={typeValue} onChange={e => setTypeValue(e.target.value)}>
                        <option value="y">Income</option>
                        <option value="n">Expense</option>
                    </select>
               </div>
                <button className="btn btn-primary" aria-label="Add transaction" type="submit">Add Transection</button>
            </form>
        </div>
    )
}
