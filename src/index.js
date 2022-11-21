import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { ChainId, DAppProvider } from '@usedapp/core';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('dotenv').config()

const config = {
  pollingInterval: 5000,
  autoConnect: true,
  readOnlyChainId: ChainId.BSC,
  readOnlyUrls: {
    [ChainId.BSC]: "https://sparkling-solitary-field.bsc.quiknode.pro/8282f393ed1ceb08bd41ab18a5e55ce5806fd088/"
  }
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={config}>
        <App />
      </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals()