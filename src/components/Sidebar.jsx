import React from 'react';

const sections = [
  { name: 'File Explorer', icon: '🗂️', aria: 'File Explorer' },
  { name: 'About', icon: '👤', aria: 'About' },
  { name: 'Experience', icon: '💼', aria: 'Experience' },
  { name: 'Projects', icon: '📁', aria: 'Projects' },
  { name: 'Education', icon: '🎓', aria: 'Education' },
  { name: 'Certificates', icon: '📜', aria: 'Certificates' },
  { name: 'Skills', icon: '🛠️', aria: 'Skills' },
  { name: 'Contact', icon: '✉️', aria: 'Contact' },
];

export default function Sidebar({ activeTab, setActiveTab, toggleExplorer, explorerOpen }) {
  return (
    <nav className="vscode-sidebar">
      {sections.map((section, idx) => (
        <button
          key={section.name}
          title={section.name}
          aria-label={section.aria}
          onClick={() => {
            if (idx === 0) toggleExplorer();
            else setActiveTab(section.name);
          }}
          className="sidebar-button-responsive"
          style={{
            background: (idx === 0 && explorerOpen) || (activeTab === section.name && idx !== 0) ? '#1e1e1e' : 'transparent',
            border: 'none',
            outline: 'none',
            color: (idx === 0 && explorerOpen) || (activeTab === section.name && idx !== 0) ? '#4FC3F7' : '#d4d4d4',
            fontSize: '1.6rem',
            cursor: 'pointer',
            borderLeft: (idx === 0 && explorerOpen) || (activeTab === section.name && idx !== 0) ? '4px solid #4FC3F7' : '4px solid transparent',
            width: '100%',
            padding: '0.7rem 0',
            transition: 'all 0.2s',
          }}
        >
          {section.icon}
        </button>
      ))}
    </nav>
  );
} 