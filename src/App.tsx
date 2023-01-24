import React from 'react';
import './App.css';
import AlertControl from './components/AlertControl';
import AutocompleteControl from './components/AutocompleteControl/AutocompleteControl';
import ClearControl from './components/ClearControl';

function App() {
  return (
    <div className='container'>
      <ClearControl />
      <AlertControl />
      <AutocompleteControl maxHints={3} />
      <AutocompleteControl maxHints={10} />
    </div>
  );
}

export default App;
