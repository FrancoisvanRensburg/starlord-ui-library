import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Switch, Input } from '../.';
import './setupIcons';
import 'starlord-ui-library/dist/tailwind.css';

const App = () => {
  return (
    <div>
      <Thing />
      <Switch checked={false} onChange={() => {}} />
      <Input label={'This is the input'} placeholder={'This is me'} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
