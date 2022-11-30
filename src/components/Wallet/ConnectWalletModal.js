import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Modal } from 'react-responsive-modal';

import { ChainId, useEthers } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { toast } from 'react-toastify'

const ConnectWalletModal = (props) => {
  const { activateBrowserWallet, active, account, activate, deactivate, chainId, switchNetwork } = useEthers()

  async function changeNetwork() {
    await switchNetwork(ChainId.Cronos)
  }

  useEffect(() => {
    if(active && chainId != ChainId.Cronos) {
      changeNetwork();
    }
  }, [chainId])

  async function connectMetaMaskWalletOnClick() {
    try {
      await activateBrowserWallet()
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

  async function connectToWalletConnect() {
    try {
      const provider = new WalletConnectProvider({
        qrcode: true,
				pollingInterval: 5000,
        bridge: 'https://bridge.walletconnect.org',
        rpc: {
          [ChainId.Cronos]: process.env.REACT_APP_CRONOS_TESTNET_RPC,
        },
      })
      await provider.enable()
      await activate(provider)

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
            {/* <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-7">
                <div className="intro text-center">
                  <div className="intro-content">
                    <span className="intro-text">Wallet Connect</span>
                    <h3 className="mt-3 mb-0">{data.heading}</h3>
                    <p>{data.content}</p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row justify-content-center items">
              <div onClick={connectMetaMaskWalletOnClick} className="col-12 col-md-6 col-lg-4 item">
                <div className="card single-wallet">
                  <div className="d-block text-center cursor-pointer" >
                    <img className="avatar-lg" src="/img/metamask.png" alt="" />
                    <h4 className="mb-0">MetaMask</h4>
                    <p>A browser extension with great flexibility. The web's most popular wallet</p>
                  </div>
                </div>
              </div>
              <div onClick={connectToWalletConnect} className="col-12 col-md-6 col-lg-4 item">
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
