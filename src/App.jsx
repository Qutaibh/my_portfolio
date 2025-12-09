import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import EditorTabs from './components/EditorTabs';
import TerminalFooter from './components/TerminalFooter';
import profileImage from './assets/profile.jpg';
import FileExplorer from './components/FileExplorer';
import CommandPalette from './components/CommandPalette';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('About');
  const [explorerOpen, setExplorerOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const toggleExplorer = () => setExplorerOpen((v) => !v);
  const openTab = (tab) => { setActiveTab(tab); setExplorerOpen(false); };

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleCommand = (action) => {
    if (action === 'explorer') toggleExplorer();
    else openTab(action);
  };

  return (
    <div className="vscode-root">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} toggleExplorer={toggleExplorer} explorerOpen={explorerOpen} />
      <div className="vscode-main">
        <TopBar />
        {explorerOpen ? (
          <FileExplorer closeExplorer={toggleExplorer} openTab={openTab} />
        ) : (
          <EditorTabs activeTab={activeTab} setActiveTab={setActiveTab} profileImage={profileImage} />
        )}
        <TerminalFooter />
        <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onCommand={handleCommand} />
      </div>
    </div>
  );
}

export default App;
