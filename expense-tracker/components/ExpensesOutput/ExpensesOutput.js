import React from "react";
import { View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={expenses} />
      <ExpensesList />
    </View>
  );
};

export default ExpensesOutput;
