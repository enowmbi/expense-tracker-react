const TransactionRow =({transaction, handleEditTransaction, handleDeleteTransaction})=>{
    return(
        <tr>
            <td>{transaction.id}</td>
            <td>{transaction.date?.toString()}</td>
            <td>{transaction.transactionType}</td>
            <td>{transaction.description}</td>
            <td>{transaction.amount}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>

    )

}

export default TransactionRow
