import React, { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import IconButton from "../components/UI/IconButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import {
  deleteExpense as deleteExpenseFromDb,
  storeExpense,
  updateExpense,
} from "../utils/http";

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const editedExpenseId = route.params?.expenseId;
  const isInEditMode = !!editedExpenseId;
  const expensesContext = useContext(ExpensesContext);

  const selectedExpense = expensesContext?.expenses?.find(
    (expense) => expense.id === editedExpenseId
  );
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isInEditMode ? "Edit expense" : "Add expense",
    });
  }, [navigation, isInEditMode]);

  const deleteExpense = async () => {
    setIsSubmitting(true);
    await deleteExpenseFromDb(editedExpenseId);
    expensesContext.deleteExpense(editedExpenseId);
    setIsSubmitting(false);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    if (isInEditMode) {
      expensesContext?.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesContext?.addExpense({ ...expenseData, id: id });
    }
    setIsSubmitting(false);
    navigation.goBack();
  };

  if (isSubmitting) {
    return <LoadingOverlay />;
  }
  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isInEditMode ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        defaultValues={selectedExpense}
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
