import React, { useReducer, useContext } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: throw new Error('Unexpected action');
  }
};

const CountContext = React.createContext();

const CountProvider = ({ children }) => {
  const contextValue = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={contextValue}>
      {children}
    </CountContext.Provider>
  );
};

const useCount = () => {
  const contextValue = useContext(CountContext);
  return contextValue;
};

const Counter = () => {
  const [count, dispatch] = useCount();
  return (
    <div>
      {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
    </div>
  );
};

const Example05 = () => (
  <>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
    <CountProvider>
      <Counter />
      <Counter />
    </CountProvider>
  </>
);

export default Example05;