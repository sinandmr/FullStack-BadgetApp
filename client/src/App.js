import BalanceCard from './components/BalanceCard'
import SummaryContainer from './components/SummaryContainer'

import './App.css'

function App() {

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
