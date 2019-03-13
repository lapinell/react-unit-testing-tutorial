import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Resiska\'s React Testing Tutorial Attempt';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();