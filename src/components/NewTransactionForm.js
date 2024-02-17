const NewTransactionForm = ({
    handleAddTransaction, 
    amount, 
    setAmount, 
    transactionType, 
    setTransactionType,
}) =>{
   return(
      <form onSubmit={(e) => handleAddTransaction(e)}>
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
       <input
           type="number"
           required 
           placeholder="Enter amount"
           value={amount}
           onChange={(e) => setAmount(e.target.value)}
       />
       <button>Add Transaction</button>
      </form>
   )
}

export default NewTransactionForm
