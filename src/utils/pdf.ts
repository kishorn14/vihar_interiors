import jsPDF from 'jspdf';
import { Client, QuotationItem } from '../types';

export const generateQuotationPDF = (
  client: Client,
  items: QuotationItem[],
  total: number
): jsPDF => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text('VIHAR INTERIORS', 14, 20);

  doc.setFontSize(11);
  doc.text('Project Quotation', 14, 27);
  doc.text(`Client: ${client.name || 'N/A'}`, 14, 37);
  doc.text(`Phone: ${client.phone || 'N/A'}`, 14, 43);
  doc.text(`Email: ${client.email || 'N/A'}`, 14, 49);
  doc.text(`Address: ${client.address || 'N/A'}`, 14, 55);

  let y = 68;
  doc.setFont('helvetica', 'bold');
  doc.text('Item', 14, y);
  doc.text('Room', 70, y);
  doc.text('Qty', 120, y);
  doc.text('Rate', 145, y);
  doc.text('Amount (Rs)', 170, y);

  doc.line(14, y + 2, 196, y + 2);
  y += 8;

  doc.setFont('helvetica', 'normal');
  items.forEach((item) => {
    doc.text(item.item, 14, y);
    doc.text(item.room, 70, y);
    doc.text(`${item.quantity} ${item.unit}`, 120, y);
    doc.text(`${item.rate}`, 145, y);
    doc.text(`${item.amount}`, 170, y);
    y += 7;
  });

  doc.line(14, y + 2, 196, y + 2);
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text(`Total Amount: Rs. ${total}`, 14, y);

  return doc;
};
