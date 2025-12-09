import React from 'react';

export default function TopBar() {
  return (
    <header className="topbar-responsive" style={{
      height: '48px',
      background: '#23272e',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1.5rem',
      borderBottom: '1.5px solid #222',
      fontSize: '1rem',
      overflow: 'hidden',
    }}>
      <div className="topbar-name" style={{ fontWeight: 'bold', fontSize: '1.1rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        Qutaibh Subeh <span className="topbar-location" style={{ color: '#4FC3F7', fontWeight: 'normal', fontSize: '0.95rem' }}>Jordan - Amman</span>
      </div>
      <div className="topbar-links" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'nowrap' }}>
        <a href="https://linkedin.com/in/qutaibh" target="_blank" rel="noopener noreferrer" className="topbar-link" style={{ color: '#4FC3F7', whiteSpace: 'nowrap' }}>LinkedIn</a>
        <a href="https://github.com/Qutaibh" target="_blank" rel="noopener noreferrer" className="topbar-link" style={{ color: '#B392F0', whiteSpace: 'nowrap' }}>GitHub</a>
        <a href="mailto:qutaibh.subeh@gmail.com" className="topbar-link topbar-link-email" style={{ color: '#FFD700', whiteSpace: 'nowrap' }}>Email</a>
        <a href="tel:+962778932194" className="topbar-link topbar-link-phone" style={{ color: '#81C784', whiteSpace: 'nowrap' }}>Phone</a>
      </div>
    </header>
  );
} 