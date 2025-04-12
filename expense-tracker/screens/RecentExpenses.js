import React, { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";
const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      expensesContext.setExpenses(expenses);
      // setFetchedExpenses(expenses);
      setIsFetching(false);
    };
    getExpenses();
  }, []);

  const recentExpenses = expensesContext?.expenses?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText={"No expenses in the last 7 days"}
    />
  );
};

export default RecentExpenses;
