import React from 'react';

export type TabType = 'portfolio' | 'quotation' | 'billing' | 'expenses';

interface NavbarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  return (
    <nav className="bottom-navbar">
      <button
        className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
        onClick={() => onSelectTab('portfolio')}
      >
        Portfolio
      </button>
      <button
        className={`nav-btn ${activeTab === 'quotation' ? 'active' : ''}`}
        onClick={() => onSelectTab('quotation')}
      >
        Quotation
      </button>
      <button
        className={`nav-btn ${activeTab === 'billing' ? 'active' : ''}`}
        onClick={() => onSelectTab('billing')}
      >
        Billing
      </button>
      <button
        className={`nav-btn ${activeTab === 'expenses' ? 'active' : ''}`}
        onClick={() => onSelectTab('expenses')}
      >
        Expenses
      </button>
    </nav>
  );
};
