import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <AuthContextProvider>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </AuthContextProvider>,
  document.getElementById('root')
);
