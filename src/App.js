import './App.css';
import Header from './components/Header'
import IncomeExpenseSummary from './components/IncomeExpenseSummary'
import NewTransactionForm from './components/NewTransactionForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header title="Expense Tracker" />
      <IncomeExpenseSummary />
      <NewTransactionForm />
      <Footer />
    </div>
  );
}

export default App;
