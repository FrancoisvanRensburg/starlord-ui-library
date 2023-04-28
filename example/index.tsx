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
      <Input />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
