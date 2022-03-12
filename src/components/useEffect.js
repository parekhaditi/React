//useEffect
/* Perform side effects --> Updating DOM, Fetching data from
API endpoints, setting subscription and timers, etc */
// Render method too early to perform side effets, use lifecycle methods

//componentDidMount() => Executed only once in component  lifecycle
//componentDidUpdate() => To update
//componentWillUnmount() => To unmount

/* The Effect Hook performs side effects in functional component s 
It is a close replacement for componentDidMount, componentDidUpdate & componentWillUnMount*/

import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  //UseEffect is a parameter, function which gets executed after every render of the component
  /* Requesting React to execute the func that is 
  passed as an arg everytime the component renders */

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  });
  return (
    <>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Clicked {count} times
      </button>
    </>
  );
};

export default UseEffect;
