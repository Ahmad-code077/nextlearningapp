import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button
        className='btn btn-accent'
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increment
      </button>
    </div>
  );
};
export default Counter;
