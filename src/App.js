import {useState} from 'react'
import DivOne from './components/DivOne'
import './App.css';

function App(props) {
  const tardis = {
    name: 'Time and Relative Dimension in Space',
    caps: false,
  }



  return (
    <div className="App">
      <DivOne tardis={tardis}/>
    </div>
  );
}

export default App;
