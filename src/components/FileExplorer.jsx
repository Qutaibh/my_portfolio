import React from 'react';

const files = [
  'About',
  'Experience',
  'Projects',
  'Education',
  'Certificates',
  'Skills',
  'Contact',
];

export default function FileExplorer({ closeExplorer, openTab }) {
  return (
    <aside style={{
      width: 260,
      background: '#23272e',
      borderRight: '1.5px solid #222',
      height: 'calc(100vh - 48px - 48px)',
      marginTop: 0,
      marginBottom: 0,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10,
      boxShadow: '2px 0 8px #0002',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.7rem 1rem', borderBottom: '1px solid #333' }}>
        <span style={{ color: '#4FC3F7', fontWeight: 'bold' }}>EXPLORER</span>
        <button onClick={closeExplorer} style={{ background: 'none', border: 'none', color: '#d4d4d4', fontSize: 18, cursor: 'pointer' }}>&times;</button>
      </div>
      <div style={{ flex: 1, padding: '1rem 0' }}>
        {files.map((file) => (
          <div
            key={file}
            onClick={() => { openTab(file); closeExplorer(); }}
            style={{
              padding: '0.6rem 1.5rem',
              color: '#d4d4d4',
              cursor: 'pointer',
              borderLeft: '3px solid transparent',
              fontWeight: 500,
              fontSize: '1.05rem',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.background = '#1e1e1e'}
            onMouseOut={e => e.currentTarget.style.background = 'transparent'}
          >
            {file}
          </div>
        ))}
      </div>
    </aside>
  );
} 