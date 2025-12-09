import React from 'react';

export default function TerminalFooter() {
  return (
    <footer className="terminal-footer-responsive" style={{
      background: '#181a1b',
      color: '#8be9fd',
      fontFamily: 'Fira Mono, monospace',
      padding: '0.7rem 1.5rem',
      borderTop: '1.5px solid #222',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.5rem',
      minHeight: '40px',
    }}>
      <span className="footer-name" style={{ color: '#50fa7b', whiteSpace: 'nowrap' }}>Qutaibh Subeh - Portfolio</span>
      <span className="footer-email" style={{ color: '#f1fa8c', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>qutaibh.subeh@gmail.com</span>
      <span className="footer-phone" style={{ color: '#ff79c6', whiteSpace: 'nowrap', fontSize: '0.85rem' }}>+9627-78932194</span>
    </footer>
  );
} 