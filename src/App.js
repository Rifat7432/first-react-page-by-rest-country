import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {

  return (
    <div className="App container">
       <Countries> </Countries>
    </div>
  );
}

export default App;
