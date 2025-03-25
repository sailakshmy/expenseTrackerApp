import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isInEditMode = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isInEditMode ? "Edit expense" : "Add expense",
    });
  }, [navigation, isInEditMode]);
  return (
    <View>
      <Text>Manage Expense</Text>
    </View>
  );
};

export default ManageExpense;
