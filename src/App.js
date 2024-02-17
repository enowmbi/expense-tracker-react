import './App.css';
import Header from './components/Header'
import IncomeExpenseSummary from './components/IncomeExpenseSummary'
import NewTransactionForm from './components/NewTransactionForm'
import Search from './components/Search'
import Transactions from './components/Transactions'
import Footer from './components/Footer'
import {useState} from 'react'

function App() {
    const [netBalance, setNetBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('transactions')) || [])
    const [amount, setAmount] = useState(0)
    const [transactionType, setTransactionType] = useState('EXPENSE')

    const handleAddTransaction = (e)=>{
        e.preventDefault()
        console.log("Inside handle add transaction")
        console.log("amount:", amount)
        console.log("transactionType:", transactionType)
        // setTransactions(newTransaction)
    }

  return (
    <div className="App">
      <Header title="Expense Tracker" />

      <IncomeExpenseSummary
          netBalance={netBalance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
      />

      <NewTransactionForm
          amount={amount}
          setAmount={setAmount}
          handleAddTransaction={handleAddTransaction} 
          transactionType={transactionType}
          setTransactionType={setTransactionType}
      />

      <Search />

      <Transactions
        transactions={transactions}
      />

      <Footer />
    </div>
  );
}

export default App;
