const Transactions = ({transactions}) =>{
  return(
      <ul>
      {transactions.map((transaction) =>{
          <li>
              {transaction.description} | {transaction.amount} | {transaction.type}
              <hr />
          </li>
      })}
      </ul>
  )
}

export default Transactions
