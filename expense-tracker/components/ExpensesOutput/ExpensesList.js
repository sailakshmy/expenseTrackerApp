import React from "react";
import { FlatList } from "react-native";

const ExpensesList = ({ expenses }) => {
  return <FlatList data={expenses} />;
};

export default ExpensesList;
