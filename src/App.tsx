import React, { useState } from 'react';
import { Navbar, TabType } from './components/Navbar';
import { Portfolio } from './components/Portfolio';
import { Quotation } from './components/Quotation';
import { Billing } from './components/Billing';
import { Expenses } from './components/Expenses';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('portfolio');

  return (
    <div className="mobile-app">
      {/* Top Header */}
      <header className="header">
        <div className="logo">VIHAR INTERIORS</div>
      </header>

      {/* Main View Area */}
      <main className="content">
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'quotation' && <Quotation />}
        {activeTab === 'billing' && <Billing />}
        {activeTab === 'expenses' && <Expenses />}
      </main>

      {/* Mobile Bottom Navigation */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />
    </div>
  );
};

export default App;
