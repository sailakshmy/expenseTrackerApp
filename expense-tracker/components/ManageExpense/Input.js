import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, textInputConfig, inputContainerStyle, inValid }) => {
  const inputStyles = [styles.input];
  if (textInputConfig?.multiline) {
    inputStyles.push(styles.inputMultiline);
  }
  if (inValid) {
    inputStyles.push(styles.invalidInputStyle);
  }
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInputStyle: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
