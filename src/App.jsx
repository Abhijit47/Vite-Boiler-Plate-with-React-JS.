import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  return (
    <div className='card'>
      <div>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className='button-grp'>
        <button onClick={handleIncrement}>count +</button>
        <button onClick={handleDecrement}>count -</button>
      </div>
    </div>
  );
}

export default App;
