import React, { useState } from 'react';
import { Expense } from '../types';

export const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    {
      id: '1',
      category: 'Plywood',
      vendor: 'Balaji Plywoods',
      amount: 45000,
      date: '2026-10-25',
    },
    {
      id: '2',
      category: 'Hardware',
      vendor: 'Hettich Center',
      amount: 18500,
      date: '2026-10-26',
    },
  ]);

  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="section-container">
      <h2>Expense Calculation</h2>
      <p className="text-muted">Calculate project expenses and material procurement costs.</p>

      <div className="card">
        <div className="total-box">
          <span>Total Expenses Incurred:</span>
          <span>Rs. {totalExpense}</span>
        </div>
      </div>

      <div className="cards-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="card item-row">
            <div>
              <strong>{expense.vendor}</strong> ({expense.category})
              <div className="text-muted">{expense.date}</div>
            </div>
            <div>
              <strong>Rs. {expense.amount}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
