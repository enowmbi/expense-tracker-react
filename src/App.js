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
    const [transactions, setTransactions] = useState([])

  return (
    <div className="App">
      <Header title="Expense Tracker" />

      <IncomeExpenseSummary
          netBalance={netBalance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
      />

      <NewTransactionForm />

      <Search />

      <Transactions
        transactions={transactions}
      />

      <Footer />
    </div>
  );
}

export default App;
