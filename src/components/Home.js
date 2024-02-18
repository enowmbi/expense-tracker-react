import IncomeExpenseSummary from '../components/IncomeExpenseSummary'
import Search from '../components/Search'
import TransactionTable from '../components/TransactionTable'

const Home = ({netBalance, totalIncome, totalExpenses, transactions, handleEditTransaction, handleDeleteTransaction}) =>{
    return(
        <main>
              <IncomeExpenseSummary
                  netBalance={netBalance}
                  totalIncome={totalIncome}
                  totalExpenses={totalExpenses}
              />

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
