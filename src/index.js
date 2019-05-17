import React from 'react';
import ReactDOM from 'react-dom';
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
    console.log('module is about to be replaced');
  });

  module.hot.accept(function() {
    // module or one of its dependencies was just updated
    console.log('module or one of its dependencies was just updated');
  });
}
