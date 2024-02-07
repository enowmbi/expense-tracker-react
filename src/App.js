import './App.css';
import Header from './components/Header'
import IncomeExpenseSummary from './components/IncomeExpenseSummary'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header title="Expense Tracker" />
      <IncomeExpenseSummary />
      <Footer />
    </div>
  );
}

export default App;
