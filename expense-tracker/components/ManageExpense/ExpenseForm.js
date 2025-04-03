import React from "react";
import { View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const changeAmount = () => {};
  const changeDate = () => {};
  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: changeAmount,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: changeDate,
        }}
      />
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
