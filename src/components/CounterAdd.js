import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

import React from 'react';

const CounterAdd = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Adcionar</button>
    </>
  );
};

export default CounterAdd;
