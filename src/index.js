import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store';


 const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render ( 
    <React.Fragment>
   <Provider store={store}>
    <App />
  </Provider>
  </React.Fragment>
);