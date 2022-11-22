import React, { useEffect, useState } from 'react'
import { useContractFunction } from '@usedapp/core';
import { Contract, utils } from 'ethers';

import { ChainId, useEthers } from '@usedapp/core'
import { toast } from 'react-toastify'

import { useGetCurrentPrice, useGetMaxSupply, useGetTotalSupply } from '../../utilities/Web3/contract'

import CONTRCT_ABI from '../../abi/LimitedERC721A.json';
import { CONTRACT_ADDRESS } from '../../utilities/Constants/index';

const ContractInterface = new utils.Interface(CONTRCT_ABI);
const RBContract = new Contract(
    CONTRACT_ADDRESS,
    ContractInterface
);

const initData = {
    img: "/img/PeskyKanga.png",
    blockchain: "/img/3635.png",
    title: "Pesky Kanga",
    reg_date: "2022-11-30",
    raise: "187,500k",
    val: "$22500",
    allocation: "$0",
    progress: "0%",
    mecha: "2800  SUPPLY",
    busd: "75 CRO",
    actionBtn: "Mint NFT",
    video_img: "/img/rebelkanga.png",
    video_icon: "fa-solid fa-play",
    video_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

const summaryData = {
    title: "Project Summary",
    content_1: "The Pesky Kanga is the bread and butter of our ecosystem. It entitles you to 80% of profits from our Launchpad and Game of chance products. (20% to Kanga Degens). ",
    content_2: "By purchasing a Pesky Kanga, your money will go towards the site's development and liquidity for our future token."
}

const overviewData = {
    title: "Project Overview",
    list_heading: "Utilities",
    content: "Hi! Meet the Pesky Kangas, the bad guys on the chain! Calling out scams, pumps, and dumps and taking no nonsense. We're a force for good but labeled the bad guys.",
}

const tokenmetricsData = {
    title: "Distributions",
    content: "See below full breakdown"
}

const roadmapData = {
    title: "Roadmap",
    content_1: "To summarise quickly, We're going to build a decentralized Launchpad where all profits go back to our holders. We're also going to have shill rewards. Share your link and earn Cro! ",
    content_2: "We're also going to expand our game of chance products, such as Lotto, and Coin flip game, and build our staking pools. Finally, we will release our token and use the remaining liquidity left from the mint proceeds"
}

const socialData = [
    {
        id: "1",
        link: "https://twitter.com/RooFinance",
        icon: "fab fa-twitter"
    },
    {
        id: "2",
        link: "https://telegram.org",
        icon: "fab fa-telegram"
    },
    {
        id: "3",
        link: "https://www.facebook.com",
        icon: "fas fa-globe"
    },
    {
        id: "4",
        link: "https://discord.com/",
        icon: "fab fa-discord"
    }
]

const overviewList = [
    {
        id: "1",
        content: "Get 80% of all Launchpad & Game of chance profits",
    },
    {
        id: "2",
        content: "Your Cro is going towards development, so we can grow and expand",
    },
    {
        id: "3",
        content: "Doxxed Developer (To CroArmy)",
    },
    {
        id: "4",
        content: "100% of Royalties given to holders",
    }
]

const tokenList = [
    {
        id: "1",
        title: "Raise",
        content: "187k Cro",
    },
    {
        id: "2",
        title: "Distribution",
        content: "65% towards development, 25% token liquidity and 10% Marketing. 0% Owner.",
    },
    {
        id: "3",
        title: "NFT Distribution",
        content: "2500 NFT's Public Mint / 300 NFT's to Owner/Team",
    },
    {
        id: "4",
        title: "Doxxed?",
        content: "Yes, with CroArmy",
    }
]

const ProjectSingle = () => {
    const [disabled, setDisabled] = useState(false)
    const [selectedCount, setSelectedCount] = useState(1)
    const { activateBrowserWallet, account, activate, deactivate } = useEthers()
    const { currentPrice } = useGetCurrentPrice()
    const { maxSupply } = useGetMaxSupply()
    const { totalSupply } = useGetTotalSupply()
    console.log("currentPrice'", currentPrice)
    console.log("maxSupply'", maxSupply)
    console.log("totalSupply'", totalSupply)

    // transaction instance
    const { state, send } = useContractFunction(RBContract, 'mint', { transactionName: 'Wrap' })

    useEffect(() => {
        if (state.status === 'PendingSignature') {
            toast.warning("Minting in progress... Please wait.", { autoClose: 6000 });
        }
        if (state.status === 'Success') {
            setDisabled(false)
            setSelectedCount(0)
            toast.success("Congratulations! Mint Successful.", { autoClose: 6000 });
        }
        if (state.status === 'Exception') {
            setDisabled(false)
            setSelectedCount(0)
            toast.error(state.errorMessage, { autoClose: 6000 });
        }
        if (state.status === 'Fail') {
            setDisabled(false)
            setSelectedCount(0)
            toast.error(state.errorMessage, { autoClose: 6000 });
        }

        delete state['status']
    }, [state]);

    const changeMintCount = (count) => {
        console.log('count select', count)
        setSelectedCount(count)
      }


    async function mintNFT() {
        if (disabled) return;
        if(!account) {
            toast.error("Connect your wallet first", { autoClose: 6000 });
            return;
        }
        setDisabled(true)
        if(selectedCount < 1) {
            return;
        }
        try {
            
            let amount = selectedCount; // 1 NFT per transaction can user mint
            console.log("What data is going to chain is:", currentPrice, amount)
            send(amount, { value: currentPrice * amount })
            
        } catch (error) {
            toast.error(error?.message)
            console.log('error', error?.message)
        }
    }
    return (
        <section className="item-details-area">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-5">
                        {/* Project Card */}
                        <div className="card project-card no-hover">
                            <div className="media">
                                <img className="card-img-top avatar-max-lg" src={initData.img} alt="" />
                                <div className="media-body ml-4">
                                    <h4 className="m-0">{initData.title}</h4>
                                    <div className="countdown-times">
                                        <h6 className="my-2">Registration in:</h6>
                                        <div className="countdown d-flex" data-date={initData.reg_date} />
                                    </div>
                                </div>
                            </div>
                            {/* Project Body */}
                            <div className="card-body">
                                <div className="items">
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <span>Total raise</span>
                                        <span> {initData.raise}</span>
                                    </div>
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <span>Valu</span>
                                        <span> {initData.val}</span>
                                    </div>
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <span>Min allo</span>
                                        <span> {initData.allocation}</span>
                                    </div>
                                </div>
                                <div className="item-progress">
                                    <div className="progress mt-4 mt-md-5">
                                        <div className="progress-bar text-center" role="progressbar" style={{ width: `${(totalSupply / maxSupply) * 100}%` }} aria-valuenow={(totalSupply / maxSupply) * 100} aria-valuemin={0} aria-valuemax={100}>{Math.round((totalSupply / maxSupply) * 100)}%</div>
                                    </div>
                                    <div className="progress-sale d-flex justify-content-between mt-3">
                                        <span>{maxSupply} SUPPLY</span>
                                        <span>{currentPrice} CRO</span>
                                    </div>
                                </div>
                            </div>
                            {/* Project Footer */}
                            <div className="project-footer d-flex align-items-center mt-4 mt-md-5">
                                <select onChange={(event) => changeMintCount(event.target.value)} value={selectedCount} className="form-control" style={{width: '25%', marginRight: '10px'}}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                                <button type="button" className="btn btn-bordered-white btn-smaller" onClick={() => mintNFT()} disabled={disabled}>{initData.actionBtn}</button>
                                {/* Social Share */}
                                <div className="social-share ml-auto">
                                    <ul className="d-flex list-unstyled">
                                        {socialData.map((item, idx) => {
                                            return (
                                                <li key={`sd_${idx}`}>
                                                    <a href={item.link}>
                                                        <i className={item.icon} />
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            {/* Blockchain Icon */}
                            <div className="blockchain-icon">
                                <img src={initData.blockchain} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 items mt-5 mt-lg-0">
                        <div className="card project-card single-item-content no-hover item ml-lg-4">
                            <h3 className="m-0">{summaryData.title}</h3>
                            <p>{summaryData.content_1}</p>
                            <p>{summaryData.content_2}</p>
                        </div>
                        <div className="card project-card single-item-content no-hover item p-0 ml-lg-4">
                            <div className="image-over">
                                <img className="card-img-top" src={initData.video_img} alt="" />
                            </div>
                            <div className="card-caption col-12 p-0">
                                <div className="card-body p-0">
                                    <div className="play-btn gallery display-yes">
                                        <a href={initData.video_link}>
                                            <i className={initData.video_icon} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card project-card single-item-content no-hover item ml-lg-4">
                            <h3 className="m-0">{overviewData.title}</h3>
                            <p className="mb-0">{overviewData.content}</p>
                            <h4>{overviewData.list_heading}</h4>
                            <ul>
                                {overviewList.map((item, idx) => {
                                    return (
                                        <li key={`odl_${idx}`}>{item.content}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="card project-card single-item-content no-hover item ml-lg-4">
                            <h3 className="m-0">{tokenmetricsData.title}</h3>
                            <p>{tokenmetricsData.content}</p>
                            {/* Token Content */}
                            <div className="table-responsive">
                                <table className="table token-content table-borderless table-sm">
                                    <tbody>
                                        {tokenList.map((item, idx) => {
                                            return (
                                                <tr key={`tdl_${idx}`}>
                                                    <td>{item.title}</td>
                                                    <td>{item.content}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card project-card single-item-content no-hover item ml-lg-4">
                            <h3 className="m-0">{roadmapData.title}</h3>
                            <p>{roadmapData.content_1}</p>
                            <p>{roadmapData.content_2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSingle;