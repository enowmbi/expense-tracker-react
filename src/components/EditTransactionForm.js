import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const EditTransactionForm = ({
    handleEditTransaction, 
    editAmount, 
    setEditAmount, 
    editTransactionType, 
    setEditTransactionType,
    editDescription,
    setEditDescription,
    transactions
}) =>{
    const {id} = useParams()
    const transaction = transactions.find((transaction) => transaction.id === id)

    useEffect(() =>{
        if(transaction){
            setEditAmount(transaction.amount)
            setEditDescription(transaction.description)
            setEditTransactionType(transaction.transactionType)
        }
    }, [transaction, setEditAmount, setEditDescription, setEditTransactionType])

   return(
      <form id="edit-transaction-form" onSubmit={(e) => e.preventDefault()}>
       <label>Description</label>
       <textarea
           required 
           value={editDescription}
           onChange={(e) => setEditDescription(e.target.value)}
       />
       <label>Amount</label>
       <input
           type="number"
           required 
           value={editAmount}
           onChange={(e) => setEditAmount(e.target.value)}
       />
       <div id="radio-buttons">
           <input
               type='radio' 
               name="inc" 
               value='INCOME'
               checked={"INCOME"===editTransactionType}
               onChange={(e)=>setEditTransactionType(e.target.value)}
           />
           <label>Income</label>
           <input
               type='radio' 
               name="inc" 
               value='EXPENSE'
               checked={"EXPENSE"===editTransactionType}
               onChange={(e)=>setEditTransactionType(e.target.value)}
           />
           <label>Expense</label>
       </div>
       <button onClick={() => handleEditTransaction(transaction.id)}>Update Transaction</button>
      </form>
   )
}

export default EditTransactionForm
