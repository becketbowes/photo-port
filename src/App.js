import React from 'react';
import './App.css';
import Nav from './components/Navigation';
import About from './components/About';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
