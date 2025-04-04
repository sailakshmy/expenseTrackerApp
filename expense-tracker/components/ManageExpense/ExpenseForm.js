import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getFormattedDate } from "../../utils/date";
import Button from "../UI/Button";
import Input from "./Input";

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues?.amount.toString() ?? "",
      isValid: true,
    },
    date: {
      value: getFormattedDate(defaultValues?.date) ?? "",
      isValid: true,
    },
    title: {
      value: defaultValues?.title ?? "",
      isValid: true,
    },
  });

  const changeInput = (inputIdentifier, enteredValue) => {
    setInputs((currInput) => ({
      ...currInput,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  };

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      title: inputs.title.value,
    };
    const amountIsValid =
      !isNaN(expenseData?.amount) && expenseData?.amount > 0;

    const dateIsValid = expenseData?.date?.toString() !== "Invalid Date";

    const titleIsValid = expenseData?.title?.trim()?.length > 0;
    if (amountIsValid && dateIsValid && titleIsValid) onSubmit(expenseData);
    else {
      // Alert.alert("Invalid input!", "Please check your input values");
      setInputs((currInput) => ({
        amount: { value: currInput?.amount?.value, isValid: amountIsValid },
        date: { value: currInput.date.value, isValid: dateIsValid },
        title: { value: currInput.title.value, isValid: titleIsValid },
      }));
      return;
    }
  };

  const formIsInvalid =
    !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid;

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
            value: inputs?.amount?.value,
          }}
        />

        <Input
          style={styles.rowInputItem}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeInput.bind(this, "date"),
            value: inputs?.date?.value,
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
          value: inputs?.title?.value,
        }}
      />

      {formIsInvalid && (
        <Text>Invalid Input Values - please check your entered data!</Text>
      )}
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
