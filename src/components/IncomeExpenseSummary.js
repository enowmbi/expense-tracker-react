import NetBalance from '../components/NetBalance'
import TotalExpenses from '../components/TotalExpenses'
import TotalIncome from '../components/TotalIncome'

const IncomeExpenseSummary = ({netBalance, totalIncome, totalExpenses}) =>{
    return(
        <>
            <NetBalance netBalance={netBalance}/>
            <TotalIncome totalIncome={totalIncome}/>
            <TotalExpenses totalExpenses={totalExpenses}/>
        </>
    )
}

export default IncomeExpenseSummary
