import BalanceCard from './components/BalanceCard';
import SummaryContainer from './components/SummaryContainer';
import { useState, useEffect, useMemo } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get('https://badget-backend.herokuapp.com/')
      .then(res => res.data.all)
      .then(all => {
        all.forEach((item, i) => {
          item.key = i;
          if (item.category === 'income') {
            setIncomes(incomes => [...incomes, item]);
          } else {
            setExpenses(expenses => [...expenses, item]);
          }
        });
      });
  }, []);

  return (
    <div className="App">
      <div className="balanceCardContainer">
        <BalanceCard />
      </div>

      <div className="summaryContainer">
        <SummaryContainer title="income" data={incomes} />
        <SummaryContainer title="expense" data={expenses} />
      </div>
    </div>
  );
}

export default App;
