import { createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];
    case "UPDATE":
      const updateExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const expenseToBeUpdated = state[updateExpenseIndex];
      const updatedExpense = { ...expenseToBeUpdated, ...action.payload.data };
      let updatedExpenseList = [...state];
      updatedExpenseList[updateExpenseIndex] = updatedExpense;
      return updatedExpenseList;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload.id);
    default:
      return state;
  }
}

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    title: "A pair of troussers",
    amount: 89.99,
    date: new Date("2022-01-19"),
  },
  {
    id: "e3",
    title: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    title: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    title: "A book",
    amount: 18.59,
    date: new Date("2022-02-18"),
  },
];

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } });
  };
  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
