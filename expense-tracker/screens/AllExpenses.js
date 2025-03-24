import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

const AllExpenses = () => {
  return (
    <View>
      <Text>All expenses screen</Text>
      <ExpensesOutput expensesPeriod={"Total"} />
    </View>
  );
};

export default AllExpenses;
