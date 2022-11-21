import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ChainId, useEthers } from '@usedapp/core'
import WalletConnectProvider from '@walletconnect/web3-provider'

const BASE_URL = "https://my-json-server.typicode.com/themeland/gameon-json-1/wallet";

const Wallet = () => {
    const { activateBrowserWallet, account, activate, deactivate } = useEthers()
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


    async function connectToWalletConnect() {
        console.log("WalletConnect")
        try {
            const provider = new WalletConnectProvider({
              qrcode: true,
              bridge: 'https://bridge.walletconnect.org',
              rpc: {
                [ChainId.CronosTestnet]: process.env.REACT_APP_CRONOS_TESTNET_RPC,
              },
            })
            await provider.enable()
            activate(provider)
      
            console.log('Trust Wallet Check', provider)
          } catch (error) {
            console.error(error)
          }
    }
    async function connectMetaMaskWalletOnClick() {
        console.log("metamask")
        try {
            await activateBrowserWallet()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className="wallet-connect-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-7">
                        {/* Intro */}
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
    );
}

export default Wallet;