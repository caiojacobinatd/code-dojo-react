import { useState } from 'react';

import './App.css';
import Row from './Components/Row';

function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <div className="calc-body">
        <text>{total}</text>
        <Row numbers={['1', '2', '3', '+']} />
        <Row numbers={['4', '5', '6', '-']} />
        <Row numbers={['7', '8', '9', '*']} />
        <Row numbers={['C', '0', '=', '/']} />
      </div>

      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        Batata
      </button>
    </div>
  );
}

export default App;
