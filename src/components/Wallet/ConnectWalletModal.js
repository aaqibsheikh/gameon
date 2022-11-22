import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Modal } from 'react-responsive-modal';

import { ChainId, useEthers } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { toast } from 'react-toastify'
const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json-1/wallet";

const ConnectWalletModal = (props) => {
  const { activateBrowserWallet, account, activate, deactivate, chainId, switchNetwork } = useEthers()

  const [data, setData] = useState({});
  const [walletData, setWalletData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}`)
      .then(res => {
        setData(res.data)
        setWalletData(res.data.walletData)
        // this.setState({
        //     data: res.data,
        //     walletData: res.data.walletData
        // })
        // console.log(data)
      })
      .catch(err => console.log(err))
  }, [account])

  async function connectMetaMaskWalletOnClick() {
    try {
      await activateBrowserWallet()
      if(chainId !== ChainId.Cronos) {
        await switchNetwork(ChainId.Cronos)
      }
      props.onHide()
    } catch (e) {
      // alert(JSON.stringify(e));
      toast.error('Please install MetaMask', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log(e)
    }
  }

  const connectToWalletConnect = async () => {
    try {
      const provider = new WalletConnectProvider({
        qrcode: true,
        bridge: 'https://bridge.walletconnect.org',
        rpc: {
          [ChainId.Cronos]: process.env.REACT_APP_CRONOS_TESTNET_RPC,
        },
      })
      await provider.enable()
      activate(provider)
      if(chainId !== ChainId.Cronos) {
        await switchNetwork(ChainId.Cronos)
      }
      props.onHide()

      console.log('Trust Wallet Check', provider)
    } catch (error) {
      console.error(error)
      toast.error(error.message, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <>
      <Modal open={props.open} onClose={props.onHide} center>
        <section className="wallet-connect-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-7">
                <div className="intro text-center">
                  <div className="intro-content">
                    <span className="intro-text">{data.sub_heading}</span>
                    <h3 className="mt-3 mb-0">{data.heading}</h3>
                    <p>{data.content}</p>
                    <p>{account}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center items">
              <div onClick={() => connectMetaMaskWalletOnClick()} className="col-12 col-md-6 col-lg-4 item">
                <div className="card single-wallet">
                  <div className="d-block text-center cursor-pointer" >
                    <img className="avatar-lg" src="/img/metamask.png" alt="" />
                    <h4 className="mb-0">MetaMask</h4>
                    <p>A browser extension with great flexibility. The web's most popular wallet</p>
                  </div>
                </div>
              </div>
              <div onClick={() => connectToWalletConnect()} className="col-12 col-md-6 col-lg-4 item">
                <div className="card single-wallet">
                  <div className="d-block text-center cursor-pointer" >
                    <img className="avatar-lg" src="/img/walletconnect.png" alt="" />
                    <h4 className="mb-0">WalletConnect</h4>
                    <p>Pair with Trust, Argent, MetaMask & more. Works from any browser, without an extension</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  )
}

export default ConnectWalletModal
