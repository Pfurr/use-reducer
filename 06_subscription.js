import React, { useEffect, useReducer } from 'react';

const useForceUpdate = () => useReducer(state => !state, false)[1];

const createSharedState = (reducer, initialState) => {
  const subscribers = [];
  let state = initialState;
  const dispatch = (action) => {
    state = reducer(state, action);
    subscribers.forEach(callback => callback());
  };
  const useSharedState = () => {
    const forceUpdate = useForceUpdate();
    useEffect(() => {
      const callback = () => forceUpdate();
      subscribers.push(callback);
      callback(); // in case it's already updated
      const cleanup = () => {
        const index = subscribers.indexOf(callback);
        subscribers.splice(index, 1);
      };
      return cleanup;
    }, []);
    return [state, dispatch];
  };
  return useSharedState;
};

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'set': return action.count;
    default: return state;
  }
};

const useCount1 = createSharedState(reducer, initialState);
const useCount2 = createSharedState(reducer, initialState);

const Counter = ({ count, dispatch }) => (
  <div>
    {count}
    <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    <button onClick={() => dispatch({ type: 'set', count: 0 })}>reset</button>
  </div>
);

const Counter1 = () => {
  const [count, dispatch] = useCount1();
  return <Counter count={count} dispatch={dispatch} />
};

const Counter2 = () => {
  const [count, dispatch] = useCount2();
  return <Counter count={count} dispatch={dispatch} />
};

const Example06 = () => (
  <>
    <Counter1 />
    <Counter1 />
    <Counter2 />
    <Counter2 />
  </>
);

export default Example06;