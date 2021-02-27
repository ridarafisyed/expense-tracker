import React, { useContext } from 'react'
import {GlobalContext }from "../context/GlobalState"


export const Transaction = ({transaction}) => {
    const {deleteTransaction }= useContext(GlobalContext);
    return (
        <li className="list-group-item"> 
            {transaction.text} : {transaction.isIncome === "y"?" +":" -"}
            {transaction.transaction}  
                <button className="btn btn-danger float-right"onClick={()=>deleteTransaction(transaction.id)}><i class="fas fa-trash-alt"></i></button>
        </li>  
        
    )
}
