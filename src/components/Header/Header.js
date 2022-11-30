import React, { useState } from 'react';
import { ChainId, useEthers } from '@usedapp/core'

import ConnectWalletModal from '../Wallet/ConnectWalletModal'
const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const { activateBrowserWallet, account, activate, deactivate } = useEthers()
    const disconnectWallet = () => {
        deactivate()
        localStorage.removeItem('walletconnect')
        localStorage.removeItem('shouldConnectMetamask')
    }
    return (
        <>
            <header id="header">
                {/* Navbar */}
                <nav data-aos="zoom-out" data-aos-delay={800} className="navbar gameon-navbar navbar-expand">
                    <div className="container header">
                        {/* Logo */}
                        <a className="navbar-brand" href="/">
                            <img src="\img/Roo.png" alt="Roo Finance" />
                        </a>
                        <div className="ml-auto" />
                        {/* Navbar Nav */}
                        <ul className="navbar-nav items mx-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">Projects <i className="icon-arrow-down" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/projects" className="nav-link">Projects</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">Staking <i className="icon-arrow-down" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="/staking-one" className="nav-link">Coin Staking</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/staking-two" className="nav-link">NFT Staking</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">Pages <i className="icon-arrow-down" /></a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">Inner Pages <i className="icon-arrow-right" /></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="/apply" className="nav-link">Apply for Project</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/wallet-connect" className="nav-link">Wallet Connect</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="/contact" className="nav-link">Contact</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/tokenomics" className="nav-link">Tokenomics</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a href="#" className="nav-link">Community <i className="icon-arrow-right" /></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="/blog" className="nav-link">Blog</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        {/* Navbar Icons */}
                        <ul className="navbar-nav icons">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#search">
                                    <i className="icon-magnifier" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Toggler */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="icon-menu m-0" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Action Button */}
                        <ul className="navbar-nav action">
                            {!account && (
                                <li className="nav-item ml-2" onClick={() => setShowModal(true)}>
                                    <p className="custom-border">Wallet Connect</p>
                                    {/* <div className="btn ml-lg-auto btn-bordered-white"><i className="icon-wallet mr-md-2" />Wallet Connect</div> */}
                                </li>
                            )}
                            {
                                account && (
                                    <li className="nav-item ml-2" onClick={() => disconnectWallet()}>
                                            <p className="custom-border">{account.substring(0, 5)}...{account.substring(39, 42)} | Disconnect</p>
                                        {/* <div className="btn ml-lg-auto btn-bordered-white">
                                            <i className="icon-logout mr-md-2" />
                                        </div> */}
                                    </li>

                                )
                            }
                        </ul>
                    </div>
                </nav>
            </header>
            {showModal && <ConnectWalletModal open={showModal} onHide={() => setShowModal(false)} />}
        </>
    );
};

export default Header;