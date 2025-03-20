import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Body/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
