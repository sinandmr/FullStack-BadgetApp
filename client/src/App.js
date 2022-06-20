import BalanceCard from './components/BalanceCard';
import SummaryContainer from './components/SummaryContainer';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState({
    income: 0,
    expense: 0,
  });

  useEffect(() => {
    axios
      .get('https://badget-backend.herokuapp.com/')
      .then(res => res.data.all)
      .then(all => {
        all.forEach((item, i) => {
          item.key = i;

          setTotal(total => {
            const { income, expense } = total;
            return item.category === 'income'
              ? {
                  ...total,
                  income: income + item.amount,
                }
              : {
                  ...total,
                  expense: expense - item.amount,
                };
          });

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
        <BalanceCard total={total} />
      </div>

      <div className="summaryContainer">
        <SummaryContainer
          title="Income"
          data={incomes}
          set={setIncomes}
          setTotal={setTotal}
        />
        <SummaryContainer
          title="Expense"
          data={expenses}
          set={setExpenses}
          setTotal={setTotal}
        />
      </div>
    </div>
  );
}

export default App;
