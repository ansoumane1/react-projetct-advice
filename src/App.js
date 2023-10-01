import React, { useState, useEffect } from 'react';
export default function App() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get adivce</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  <p>
    You have read <span>{props.count}</span> times
  </p>;
}
