import BalanceCard from './BalanceCard'
import SummaryContainer from './SummaryContainer'

import './App.css'

import useFetch from './hooks/useFetch/useFetch'

function App() {

  const { loading, data, error } = useFetch('http://badget-backend.herokuapp.com/');
  const dataMoney = data;
  return (
    <div className="App">
      <div className="balanceCardContainer">
        <BalanceCard data={dataMoney} />
      </div>

      <div className="summaryContainer">
        <SummaryContainer title="Income" />
        <SummaryContainer title="Expense" />
      </div>

    </div>
  );
}

export default App;
