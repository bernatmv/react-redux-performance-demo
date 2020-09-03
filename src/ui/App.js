import React from 'react';

import './App.css';

import Messages from './components/Messages';
import NotMemoized from './components/NotMemoized';
import Memoized from './components/Memoized';

function App() {
  return (
    <div className="App">
      <Messages />
      <div className="Benchmark">
        <NotMemoized />
        <Memoized />
      </div>
    </div>
  );
}

export default App;
