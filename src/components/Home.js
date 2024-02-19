import IncomeExpenseSummary from '../components/IncomeExpenseSummary'
import Search from '../components/Search'
import TransactionTable from '../components/TransactionTable'
import { Link } from 'react-router-dom'

const Home = ({netBalance, totalIncome, totalExpenses, transactions, handleEditTransaction, handleDeleteTransaction}) =>{
    return(
        <main>
              <IncomeExpenseSummary
                  netBalance={netBalance}
                  totalIncome={totalIncome}
                  totalExpenses={totalExpenses}
              />

             <Link id='add-new-transaction' to='/transactions/new'>Add New Transaction</Link>
         
              <Search />

              <TransactionTable
                transactions={transactions}
                handleEditTransaction={handleEditTransaction}
                handleDeleteTransaction={handleDeleteTransaction}
              />
        </main>
    )
}

export default Home
