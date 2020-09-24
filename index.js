import React, { useState } from 'react';
import { render } from 'react-dom';

import Example01 from './01_minimal';
import Example02 from './02_action';
import Example03 from './03_multiple';
import Example04 from './04_textinput';
import Example05 from './05_context';
import Example06 from './06_subscription';

const App = () => {
  const [id, setId] = useState('01');
  return (
    <div>
      <select value={id} onChange={e => setId(e.target.value)}>
        <option value={'01'}>Example01</option>
        <option value={'02'}>Example02</option>
        <option value={'03'}>Example03</option>
        <option value={'04'}>Example04</option>
        <option value={'05'}>Example05</option>
        <option value={'06'}>Example06</option>
      </select>
      <hr />
      {
        id === '01' ? <Example01 /> :
        id === '02' ? <Example02 /> :
        id === '03' ? <Example03 /> :
        id === '04' ? <Example04 /> :
        id === '05' ? <Example05 /> :
        id === '06' ? <Example06 /> :
        /* default */ null
      }
    </div>
  );
};

render(<App />, document.getElementById('root'));
