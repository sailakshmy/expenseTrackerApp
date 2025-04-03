import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const changeAmount = () => {};
  const changeDate = () => {};
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInputItem}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeAmount,
          }}
        />
        <Input
          style={styles.rowInputItem}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeDate,
          }}
        />
      </View>

      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false,
          //   autoCapitalize: "sentences",
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInputItem: {
    flex: 1,
  },
});
