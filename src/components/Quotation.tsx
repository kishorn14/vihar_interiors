import React, { useState } from 'react';
import { Client, QuotationItem } from '../types';
import { generateQuotationPDF } from '../utils/pdf';

export const Quotation: React.FC = () => {
  const [client, setClient] = useState<Client>({
    name: 'Sample Client',
    phone: '+91 98765 43210',
    email: 'client@example.com',
    address: 'Bangalore',
  });

  const [items, setItems] = useState<QuotationItem[]>([
    {
      id: '1',
      room: 'Living Room',
      item: 'TV Unit & Wall Paneling',
      quantity: 50,
      unit: 'sqft',
      rate: 1600,
      amount: 80000,
    },
    {
      id: '2',
      room: 'Modular Kitchen',
      item: 'BWP Base Cabinets',
      quantity: 40,
      unit: 'sqft',
      rate: 2200,
      amount: 88000,
    },
  ]);

  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  const handleDownloadPDF = () => {
    const doc = generateQuotationPDF(client, items, totalAmount);
    doc.save(`Quotation_${client.name.replace(/\s+/g, '_')}.pdf`);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Quotation from Vihar Interiors - ${client.name}`);
    const body = encodeURIComponent(
      `Hello ${client.name},\n\nPlease find your quotation breakdown:\nTotal Amount: Rs. ${totalAmount}\n\nWarm regards,\nVihar Interiors`
    );
    window.location.href = `mailto:${client.email}?subject=${subject}&body=${body}`;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `*Vihar Interiors Quotation*\nClient: ${client.name}\nTotal: Rs. ${totalAmount}\nPDF Quotation ready.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="section-container">
      <h2>Quotation Generator</h2>

      {/* Client Info Boilerplate */}
      <div className="card">
        <h3>Client Details</h3>
        <div className="form-grid">
          <input
            className="input"
            placeholder="Client Name"
            value={client.name}
            onChange={(e) => setClient({ ...client, name: e.target.value })}
          />
          <input
            className="input"
            placeholder="Phone Number"
            value={client.phone}
            onChange={(e) => setClient({ ...client, phone: e.target.value })}
          />
          <input
            className="input"
            placeholder="Email Address"
            value={client.email}
            onChange={(e) => setClient({ ...client, email: e.target.value })}
          />
          <input
            className="input"
            placeholder="Site Address"
            value={client.address}
            onChange={(e) => setClient({ ...client, address: e.target.value })}
          />
        </div>
      </div>

      {/* Items List Boilerplate */}
      <div className="card">
        <h3>Quotation Items</h3>
        {items.map((item) => (
          <div key={item.id} className="item-row">
            <div>
              <strong>{item.item}</strong> ({item.room})
              <div className="text-muted">
                {item.quantity} {item.unit} @ Rs. {item.rate}
              </div>
            </div>
            <div>
              <strong>Rs. {item.amount}</strong>
            </div>
          </div>
        ))}

        <div className="total-box">
          <span>Total Quotation:</span>
          <span>Rs. {totalAmount}</span>
        </div>
      </div>

      {/* Action Buttons for PDF and Sending */}
      <div className="action-buttons">
        <button className="btn btn-primary" onClick={handleDownloadPDF}>
          Download PDF
        </button>
        <button className="btn btn-secondary" onClick={handleSendEmail}>
          Send via Mail
        </button>
        <button className="btn btn-whatsapp" onClick={handleShareWhatsApp}>
          Send via WhatsApp
        </button>
      </div>
    </div>
  );
};
