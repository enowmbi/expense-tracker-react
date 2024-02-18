import TransactionRow from '../components/TransactionRow'

const TransactionTable = ({transactions, handleEditTransaction, handleDeleteTransaction}) =>{
  return(
      <table>
          <thead>
              <tr>
                  <th>Transaction ID</th>
                  <th>Transaction Date</th>
                  <th>Transaction Type</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
              {transactions.map((transaction) => {
                  return(
                      <TransactionRow
                      key={transaction.id}
                      transaction={transaction}
                      handleEditTransaction={handleEditTransaction}
                      handleDeleteTransaction={handleDeleteTransaction}
                      />
                  )
              })}
          </tbody>
      </table>
  )
}

export default TransactionTable
