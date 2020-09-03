import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './ui/index.css';

import store from './redux/store';
import App from './ui/App';

const AppContainer = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById('root'));
