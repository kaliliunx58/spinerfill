import { useState } from 'react';

export default function Spinner() {
  const [spinNumber, setSpinNumber] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const spinWheel = () => {
    setSpinning(true);
    setTimeout(() => {
      // Random number generation for spinner (6 digits like Diljit)
      const randomNumber = Math.floor(Math.random() * 900000) + 100000; // 6 digit random number
      setSpinNumber(randomNumber);
      setSpinning(false);
    }, 3000); // Spinner spin time (3 seconds)
  };

  return (
    <div>
      <h1>Spin the Wheel</h1>
      <button onClick={spinWheel} disabled={spinning}>Spin</button>
      {spinning ? (
        <div className="spinner">Spinning...</div>
      ) : (
        spinNumber && <div>Your number: {spinNumber}</div>
      )}
    </div>
  );
}
