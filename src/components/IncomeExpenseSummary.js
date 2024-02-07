import NetBalance from '../components/NetBalance'
import TotalExpenses from '../components/TotalExpenses'
import TotalIncome from '../components/TotalIncome'

const IncomeExpenseSummary = () =>{
    return(
        <>
            <NetBalance />
            <TotalIncome />
            <TotalExpenses/>
        </>
    )
}

export default IncomeExpenseSummary
