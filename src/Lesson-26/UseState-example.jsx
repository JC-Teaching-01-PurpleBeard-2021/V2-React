import React, { useState } from 'react';

function UseStateExample() {
  const [count, setCount] = useState(0);
  // 1. Reference the current state
  // 2. Function (callback to you update state)

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>New 'Function' based system</h1>
      <h3>The count is currently: {count}</h3>
      <button onClick={increment}>Add 1 to the count</button>
      <br />
      <br />
      <a href="https://reactjs.org/docs/hooks-intro.html">Hooks Docs</a>
    </div>
  );
}

export default UseStateExample;
