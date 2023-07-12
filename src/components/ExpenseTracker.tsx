import React, { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const storedExpenses = localStorage.getItem("expenses");
    if (storedExpenses) {
      const parsedExpenses = JSON.parse(storedExpenses, (key, value) => {
        if (key === "date") {
          return new Date(value) as unknown as Date;
        }
        return value;
      }) as Expense[];
      setExpenses(parsedExpenses);
    }
  }, []);

  const handleAddExpense = (expense: Expense) => {
    const newExpense: Expense = {
      ...expense,
      id: Math.random().toString(),
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const handleDeleteExpense = (expenseId: string) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== expenseId
    );
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const totalExpenseAmount = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Expense Tracker</h2>
      <ExpenseForm onAddExpense={handleAddExpense} />
      {expenses.length > 0 ? (
        <ExpenseList
          expenses={expenses}
          onDeleteExpense={handleDeleteExpense}
        />
      ) : (
        <p>No expenses to display.</p>
      )}
      <p className="mt-4">Total Expenses: Rs {totalExpenseAmount.toFixed(2)}</p>
    </div>
  );
};

export default ExpenseTracker;
