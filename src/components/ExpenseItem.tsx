import React from "react";
import { Expense } from "./ExpenseTracker";

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense }) => {
  return (
    <div className="p-4 mb-4 bg-gray-100 rounded-md">
      <h3 className="text-lg mb-2">{expense.description}</h3>
      <p className="text-gray-600">Amount: {expense.amount}</p>
      <p className="text-gray-600">Date: {expense.date.toDateString()}</p>
    </div>
  );
};

export default ExpenseItem;
