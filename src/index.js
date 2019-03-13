import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Resiska\'s React Testing Tutorial Attempt';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();