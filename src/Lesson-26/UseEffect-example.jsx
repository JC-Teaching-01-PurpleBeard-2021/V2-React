import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  const [jsonData, updateData] = useState('hello');

  useEffect(() => {
    alert('Hello Class');
  });

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments/2')
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  //     // .then((json) => updateJSON(json));
  // });

  // const updateJSON = (data) => {
  //   updateData(data.name);
  // };

  return (
    <div>
      <h1>useEffect Example</h1>
      <h3>{jsonData}</h3>
      <a href="https://jsonplaceholder.typicode.com/">Example JSON RestAPI</a>
    </div>
  );
}

export default UseEffectExample;
