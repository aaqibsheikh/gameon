import React, { useEffect, useState } from 'react';
import WalletConnectProvider from '@walletconnect/web3-provider'
import { useEthers, ChainId } from '@usedapp/core'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// importing MyRouts where we located all of our theme
import MyRouts from './routers/routes';


function App() {
  const {
    activateBrowserWallet,
    account,
    activate,
    deactivate,
    switchNetwork,
    chainId,
    error
  } = useEthers()

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  });

  
  useEffect(() => {
    const checkNetwork = async () => {
      try {
        
        if (account && ChainId.Cronos !== chainId) {
          await switchNetwork(ChainId.Cronos)
        }
      } catch (error) {
        toast.error(error, {
          position: 'bottom-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        
      }
      
    }
    const checkWalletConnectSession = async () => {
      if (window.localStorage.walletconnect) {
        const provider = new WalletConnectProvider({
          qrcode: true,
          bridge: 'https://bridge.walletconnect.org',
          rpc: {
            [ChainId.Cronos]: process.env.REACT_APP_CRONOS_TESTNET_RPC,
          },
        })
        await provider.enable()
        await switchNetwork(ChainId.Cronos)
        await activate(provider)
        // await activateBrowserWallet()
      }
    }
    
    checkNetwork();
    checkWalletConnectSession()
  }, [chainId])
  return (
    <div>
      <ToastContainer />
      <MyRouts />
    </div>
  );
}

export default App;