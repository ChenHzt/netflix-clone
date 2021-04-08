import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Normalize } from 'styled-normalize'

const store = createStore(reducers,composeWithDevTools( applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Normalize />
      <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
