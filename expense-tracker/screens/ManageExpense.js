import React, { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isInEditMode = !!editedExpenseId;
  const expensesContext = useContext(ExpensesContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isInEditMode ? "Edit expense" : "Add expense",
    });
  }, [navigation, isInEditMode]);

  const deleteExpense = () => {
    expensesContext.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = () => {
    if (isInEditMode) {
      expensesContext?.updateExpense(editedExpenseId, {
        title: "Updates Desc!!!!",
        amount: 29.99,
        date: new Date("2025-03-30"),
      });
    } else {
      expensesContext?.addExpense({
        title: "Desc",
        amount: 19.99,
        date: new Date("2025-03-28"),
      });
    }
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isInEditMode ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
      />

      {isInEditMode && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpense}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});

export default ManageExpense;
