import axios from "axios";

const DB_URL = "https://react-native-app-7adb7-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const res = await axios.post(`${DB_URL}/expenses.json`, expenseData);
  const id = res.data.name;
  return id;
};

export const fetchExpenses = async () => {
  const res = await axios.get(`${DB_URL}/expenses.json`);
  const expenses = [];
  for (const key in res.data) {
    const expenseOj = {
      id: key,
      amount: res.data[key].amount,
      date: new Date(res.data[key].date),
      title: res.data[key].title,
    };
    expenses.push(expenseOj);
  }
  return expenses;
};
