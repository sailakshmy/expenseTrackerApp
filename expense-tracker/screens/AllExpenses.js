import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

const AllExpenses = () => {
  const { expenses } = useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod={"Total"} expenses={expenses} />;
};

export default AllExpenses;
