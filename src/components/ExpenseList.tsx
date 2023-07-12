import React from "react";
import ExpenseItem from "./ExpenseItem";

type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (expenseId: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
