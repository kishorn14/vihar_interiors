export interface Client {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export interface QuotationItem {
  id: string;
  room: string;
  item: string;
  quantity: number;
  unit: string;
  rate: number;
  amount: number;
}

export interface Expense {
  id: string;
  category: string;
  vendor: string;
  amount: number;
  date: string;
}

export interface Bill {
  id: string;
  clientName: string;
  invoiceNumber: string;
  totalAmount: number;
  paidAmount: number;
  status: 'Pending' | 'Paid' | 'Partial';
  dueDate: string;
}
