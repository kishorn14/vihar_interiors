import React from 'react';

export const Portfolio: React.FC = () => {
  return (
    <div className="section-container">
      <div className="hero-card">
        <h1>Vihar Interiors</h1>
        <p>Luxury Interior Design & Modular Woodwork</p>
        <div className="hero-actions">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Portfolio Showcase</h2>
        <p className="text-muted">Add your interior projects, galleries, and client photos here.</p>
        <div className="grid-placeholder">
          <div className="placeholder-box">Living Room Projects</div>
          <div className="placeholder-box">Modular Kitchens</div>
          <div className="placeholder-box">Bedrooms & Wardrobes</div>
        </div>
      </div>
    </div>
  );
};
