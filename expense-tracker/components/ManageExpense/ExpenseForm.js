import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../UI/Button";
import Input from "./Input";

const ExpenseForm = ({ onCancel, onSubmit, submitButtonLabel }) => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    title: "",
  });

  const changeInput = (inputIdentifier, enteredValue) => {
    setInputValues((currInput) => ({
      ...currInput,
      [inputIdentifier]: enteredValue,
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      title: inputValues.title,
    };
    onSubmit(expenseData);
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInputItem}
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeInput.bind(this, "amount"),
            value: inputValues?.amount,
          }}
        />
        <Input
          style={styles.rowInputItem}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeInput.bind(this, "date"),
            value: inputValues?.date,
          }}
        />
      </View>

      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          //   autoCorrect: false,
          //   autoCapitalize: "sentences",
          onChangeText: changeInput.bind(this, "title"),
          value: inputValues?.title,
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
