import React from 'react';
import ReactDOM from 'react-dom/client';
import '~/styles/styles.scss';
import App from './App';
import { Provider } from 'react-redux';

import { store } from '~/redux';
import GlobalStyles from '~/hoc/GlobalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
