import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import NewTransactionForm from './components/NewTransactionForm'
import EditTransactionForm from './components/EditTransactionForm'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { format } from 'date-fns'

function App() {
    const [netBalance, setNetBalance] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalExpenses, setTotalExpenses] = useState(0)
    const [transactions, setTransactions] = useState([])
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const [transactionType, setTransactionType] = useState('EXPENSE')
    const [editDescription, setEditDescription] = useState('')
    const [editAmount, setEditAmount] = useState(0)
    const [editTransactionType, setEditTransactionType] = useState('EXPENSE')
    const navigate = useNavigate()

    useEffect(() =>{
        setTransactions(JSON.parse(localStorage.getItem('transactions')) || [])
    },[])


    const handleAddTransaction = (e)=>{
        e.preventDefault()
        const newDate = new Date()
        const newTransaction = {
            id: uuidv4(), 
            transactionDate: format(newDate,'yyyy-MM-dd'), 
            description: description, 
            amount: amount, 
            transactionType: transactionType 
        }
        transactionType === "INCOME" ? 
            setTotalIncome((prev) => prev + parseFloat(amount)) : setTotalExpenses((prev) => prev + parseFloat(amount))  
        const balance = totalIncome - totalExpenses
        setNetBalance(parseFloat(balance))
        const transactionList = [...transactions, newTransaction]
        localStorage.setItem('transactions', JSON.stringify(transactionList))
        setTransactions(transactionList)
        setDescription('')
        setAmount(0)
        setTransactionType('EXPENSE')

        navigate('/')
    }

    const handleEditTransaction = (id) =>{
        const updatedOn = new Date()
        const updatedTransaction = {
            id: id, 
            transactionDate: format(updatedOn, 'yyyy-MM-dd'),
            amount: editAmount, 
            description: editDescription, 
            transactionType: editTransactionType
        }

        const updatedTrans = transactions.map((transaction) => transaction.id === id ? {...updatedTransaction} : transaction)
        localStorage.setItem('transactions', JSON.stringify(updatedTrans))
        setTransactions(updatedTrans)
        setEditAmount(0)
        setEditDescription('')
        setEditTransactionType('EXPENSE')

        navigate('/')
    }

    const handleDeleteTransaction = (id) =>{
        const filteredTransactions = transactions.filter((transaction) => transaction.id !== id)
        localStorage.setItem('transactions', JSON.stringify(filteredTransactions))
        setTransactions(filteredTransactions)
    }

  return (
    <div className="App">
      <Header title="Expense Tracker" />

      <Routes>
          <Route
               path='/'
               element={
                  <Home 
                      netBalance={netBalance}
                      totalIncome={totalIncome}
                      totalExpenses={totalExpenses}
                      handleEditTransaction={handleEditTransaction}
                      handleDeleteTransaction={handleDeleteTransaction}
                      transactions={transactions}
                  />
               }
          />

          <Route 
              path='/transactions/new'
              element={
                  <NewTransactionForm
                      description={description}
                      setDescription={setDescription}
                      amount={amount}
                      setAmount={setAmount}
                      handleAddTransaction={handleAddTransaction} 
                      transactionType={transactionType}
                      setTransactionType={setTransactionType}
                  />
              }
         />

          <Route 
              path='/transactions/:id/edit'
              element={
                  <EditTransactionForm
                      editDescription={editDescription}
                      setEditDescription={setEditDescription}
                      editAmount={editAmount}
                      setEditAmount={setEditAmount}
                      handleEditTransaction={handleEditTransaction} 
                      editTransactionType={editTransactionType}
                      setEditTransactionType={setEditTransactionType}
                      transactions={transactions}
                  />
              }
         />
       </Routes>
      <Footer />
    </div>
  );
}

export default App;
