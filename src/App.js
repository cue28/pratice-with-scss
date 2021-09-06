import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Mainbanner from './components/Mainbanner';
import Introduction from './components/Introduction';
import Detail from './components/Detail';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Mainbanner/>
      <Introduction/>
      <Detail />
    </div>
  );
}

export default App;