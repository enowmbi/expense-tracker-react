import { Link } from 'react-router-dom'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const TransactionRow =({transaction, handleEditTransaction, handleDeleteTransaction})=>{
    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.date?.toString()}</td>
            <td>{transaction.transactionType}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td><Link to={`/transactions/${transaction.id}/edit`}>{<FaPencilAlt role="button" tabIndex="0" />}</Link></td>
            <td>{<FaTrashAlt role="button" tabIndex="1" onClick={() => handleDeleteTransaction(transaction.id)} />}</td>
        </tr>

    )

}

export default TransactionRow
