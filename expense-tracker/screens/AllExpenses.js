import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const expensesContext = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expensesPeriod={"Total"}
      expenses={expensesContext.expenses}
      fallbackText={"No expenses have been registered"}
    />
  );
};

export default AllExpenses;
