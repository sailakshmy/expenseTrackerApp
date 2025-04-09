import axios from "axios";
export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-app-7adb7-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
};
