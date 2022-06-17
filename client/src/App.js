import { useState } from 'react'
import BalanceCard from './components/BalanceCard'
import SummaryContainer from './components/SummaryContainer'

import './App.css'

import { useEffect } from 'react'
import useFetch from './hooks/useFetch/useFetch'

function App() {

  const { loading, data, error } = useFetch('http://badget-backend.herokuapp.com/');

  useEffect(() => {
    console.log(data.data.all[0])
  }, [])

  const [expenseData, setExpenseData] = useState({});
  const [incomeData, setIncomeData] = useState({});

  return (
    <div className="App">
      <div className="balanceCardContainer">
        <BalanceCard />
      </div>

      <div className="summaryContainer">
        <SummaryContainer title="Income" />
        <SummaryContainer title="Expense" />
      </div>

    </div>
  );
}

export default App;
