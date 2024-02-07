const NewTransactionForm = () =>{
   return(
      <form>
       <input type='radio' checked name="inc" />
       <label>Income</label>
       <input type='radio' name="inc" />
       <label>Expense</label>
       <input type="number" required placeholder="Enter amount"/>
       <button>Add</button>
      </form>
   )
}

export default NewTransactionForm
