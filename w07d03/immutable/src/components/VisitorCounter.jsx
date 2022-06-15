import {useState} from 'react';

const VisitorCounter = () => {
  // const arr = useState(0);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    // count += 1;

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prev) => prev + 1);
    setCount((prev) => {
      return prev + 1;
    });
    setCount((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <h2>Visitor Counter: {count}</h2>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
};

export default VisitorCounter;
