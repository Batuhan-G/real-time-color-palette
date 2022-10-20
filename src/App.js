import { useEffect } from 'react';
import './App.css';
import Palette from './components/Palette';
import { init } from './socketApi';

function App() {

  useEffect(() => {
    init()
  }, [])
  
  return (
    <div className="App">
     <Palette />
    </div>
  );
}

export default App;
