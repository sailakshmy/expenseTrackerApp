import React, { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../utils/date";
import { fetchExpenses } from "../utils/http";

const RecentExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  const recentExpenses = expensesContext?.expenses?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
    };
    getExpenses();
  }, []);
  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 days"}
      expenses={recentExpenses}
      fallbackText={"No expenses in the last 7 days"}
    />
  );
};

export default RecentExpenses;
