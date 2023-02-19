import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState();

  const fetchAdvice = async () => {
    const request = await fetch('https://api.adviceslip.com/advice');
    const response = await request.json();

    setAdvice(response.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main>
      <small>ADVICE #{advice?.id || ''}</small>
      <h1>&#x201C;{advice?.advice || ''}&#x201D;</h1>
      <div className="divider"></div>
      <button onClick={fetchAdvice}>
        <img src="/images/icon-dice.svg" alt="roll the dice" />
      </button>
    </main>
  );
}

export default App;
