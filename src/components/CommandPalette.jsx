import React, { useState, useEffect, useRef } from 'react';

const commands = [
  { label: 'Go to About', action: 'About' },
  { label: 'Go to Experience', action: 'Experience' },
  { label: 'Go to Projects', action: 'Projects' },
  { label: 'Go to Education', action: 'Education' },
  { label: 'Go to Certificates', action: 'Certificates' },
  { label: 'Go to Skills', action: 'Skills' },
  { label: 'Go to Contact', action: 'Contact' },
  { label: 'Open File Explorer', action: 'explorer' },
];

export default function CommandPalette({ open, onClose, onCommand }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef();

  const filtered = commands.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setSelected(0);
      setTimeout(() => inputRef.current && inputRef.current.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') setSelected((s) => Math.min(s + 1, filtered.length - 1));
      if (e.key === 'ArrowUp') setSelected((s) => Math.max(s - 1, 0));
      if (e.key === 'Enter' && filtered[selected]) {
        onCommand(filtered[selected].action);
        onClose();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, selected, filtered, onClose, onCommand]);

  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.25)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    }}>
      <div style={{
        marginTop: '10vh',
        background: '#23272e',
        borderRadius: 8,
        boxShadow: '0 8px 32px #0008',
        minWidth: 340,
        maxWidth: 480,
        width: '100%',
        padding: '1rem 0.5rem',
      }}>
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '95%',
            padding: '0.7rem 1rem',
            fontSize: '1.1rem',
            background: '#1e1e1e',
            color: '#d4d4d4',
            border: 'none',
            borderRadius: 4,
            marginBottom: 8,
            outline: 'none',
          }}
          placeholder="Type a command..."
        />
        <div style={{ maxHeight: 260, overflowY: 'auto' }}>
          {filtered.map((cmd, i) => (
            <div
              key={cmd.action}
              style={{
                padding: '0.6rem 1rem',
                background: i === selected ? '#4FC3F7' : 'transparent',
                color: i === selected ? '#23272e' : '#d4d4d4',
                cursor: 'pointer',
                borderRadius: 4,
                fontWeight: i === selected ? 'bold' : 'normal',
              }}
              onMouseOver={() => setSelected(i)}
              onClick={() => { onCommand(cmd.action); onClose(); }}
            >
              {cmd.label}
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: '0.6rem 1rem', color: '#888' }}>No commands found.</div>
          )}
        </div>
      </div>
    </div>
  );
} 