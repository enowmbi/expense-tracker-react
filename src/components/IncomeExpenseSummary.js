import NetBalance from '../components/NetBalance'
import TotalExpenses from '../components/TotalExpenses'
import TotalIncome from '../components/TotalIncome'

const IncomeExpenseSummary = ({netBalance, totalIncome, totalExpenses}) =>{
    return(
        <div id="summary">
            <NetBalance netBalance={netBalance}/>
            <TotalIncome totalIncome={totalIncome}/>
            <TotalExpenses totalExpenses={totalExpenses}/>
        </div>
    )
}

export default IncomeExpenseSummary
