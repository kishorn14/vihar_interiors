import React, { useState } from 'react';
import { Bill } from '../types';

export const Billing: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>([
    {
      id: '1',
      clientName: 'Siddharth Rao',
      invoiceNumber: 'INV-2026-01',
      totalAmount: 168000,
      paidAmount: 80000,
      status: 'Partial',
      dueDate: '2026-11-15',
    },
  ]);

  return (
    <div className="section-container">
      <h2>Client Billing</h2>
      <p className="text-muted">Track invoices, client payments, and pending dues.</p>

      <div className="cards-list">
        {bills.map((bill) => (
          <div key={bill.id} className="card">
            <div className="card-header">
              <h3>{bill.clientName}</h3>
              <span className={`badge status-${bill.status.toLowerCase()}`}>
                {bill.status}
              </span>
            </div>
            <div className="card-body">
              <div>Invoice: {bill.invoiceNumber}</div>
              <div>Total: Rs. {bill.totalAmount}</div>
              <div>Paid: Rs. {bill.paidAmount}</div>
              <div>Due: Rs. {bill.totalAmount - bill.paidAmount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
