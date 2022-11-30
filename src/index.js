import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { ChainId, DAppProvider } from '@usedapp/core';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

require('dotenv').config()

const config = {
  pollingInterval: 15000,
  autoConnect: true,
  readOnlyChainId: ChainId.Cronos,
  readOnlyUrls: {
    [ChainId.Cronos]: process.env.REACT_APP_CRONOS_TESTNET_RPC
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