import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Mainbanner from './components/Mainbanner';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Mainbanner/>
      <Introduction/>
    </div>
  );
}

export default App;