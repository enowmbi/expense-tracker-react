const NewTransactionForm = ({
    handleAddTransaction, 
    amount, 
    setAmount, 
    transactionType, 
    setTransactionType,
    description,
    setDescription
}) =>{
   return(
      <form id="new-transaction-form" onSubmit={(e) => handleAddTransaction(e)}>
       <label>Description</label>
       <textarea
           required 
           placeholder="Enter transaction description"
           value={description}
           onChange={(e) => setDescription(e.target.value)}
       />
       <label>Amount</label>
       <input
           type="number"
           required 
           placeholder="Enter amount"
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
       />
       <div id="radio-buttons">
           <input
               type='radio' 
               name="inc" 
               value='INCOME'
               checked={"INCOME"===transactionType}
               onChange={(e)=>setTransactionType(e.target.value)}
           />
           <label>Income</label>
           <input
               type='radio' 
               name="inc" 
               value='EXPENSE'
               checked={"EXPENSE"===transactionType}
               onChange={(e)=>setTransactionType(e.target.value)}
           />
           <label>Expense</label>
       </div>
       <button>Add Transaction</button>
      </form>
   )
}

export default NewTransactionForm
