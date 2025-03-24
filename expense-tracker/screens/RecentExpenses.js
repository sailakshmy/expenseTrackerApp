import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const RecentExpenses = () => {
  return (
    <View>
      <Text>Recent Expenses</Text>
      <ExpensesOutput expensesPeriod={"Last 7 days"} />
    </View>
  );
};

export default RecentExpenses;
