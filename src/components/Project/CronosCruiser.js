import React, { Component } from 'react';

const initData = {
    img: "/img/Cruiser.jpg",
    blockchain: "/img/3635.png",
    title: "Cronos Cruiser",
    reg_date: "2022-11-30",
    raise: "7.5k",
    val: "$900",
    allocation: "$0",
    progress: "0%",
    mecha: "0/300 SUPPLY",
    busd: "25 CRO",
    actionBtn: "Mint NFT",
    video_img: "/img/cronos.png",
    video_icon: "fa-solid fa-play",
    video_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

const summaryData = {
    title: "Project Summary",
    content_1: "Have your chance of winning a highly sought after Cronos Cruiser",
    content_2: "One lucky winner will win a Cronos Cruiser (Or cash equilevant) if they choose to. Please read rules below."
}

const overviewData = {
    title: "What are Cronos Cruisers",
    list_heading: "Perks",
    content: "Cronos Cruisers is a collection of 8000 algorithically-generated NFTs, racing through the winter along the Cronos Ring to be the ultimaate Cronos Cruiser",
}

const tokenmetricsData = {
    title: "Rules",
    content: "This competition is in no way sponsored, endorsed, administered by, or associated with Cronos Cruisers"
}

const roadmapData = {
    title: "Roadmap",
    content_1: "The Roadmap/Project is really simple, as you mint, your nft is assigned a token. Once sold out we will raffle the project and use Google random number generator",
    content_2: "One lucky winner will win a Cronos Cruiser. The raffle will be posted live on Youtube."
}

const socialData = [
    {
        id: "1",
        icon: "fab fa-twitter"
    },
    {
        id: "2",
        link: "telegram",
        icon: "fab fa-telegram"
    },
    {
        id: "3",
        link: "globe",
        icon: "fas fa-globe"
    },
    {
        id: "4",
        link: "discord",
        icon: "fab fa-discord"
    }
]

const overviewList = [
    {
        id: "1",
        content: "Enjoy staking reward booster",
    },
    {
        id: "2",
        content: "Platform fee rebates",
    },
    {
        id: "3",
        content: "Exciting benefits",
    },
    {
        id: "4",
        content: "Potential gamification",
    }
]

const tokenList = [
    {
        id: "1",
        title: "Raffle",
        content: "Raffle will be posted live on Youtube, using Google random number generator",
    },
    {
        id: "2",
        title: "Platfrom Raise:",
        content: "7500 Cro ",
    },
    {
        id: "3",
        title: "Price:",
        content: "25 Cro",
    },
    {
        id: "4",
        title: "Prize payout",
        content: "1 x Cronos Cruiser to Raffle Winner, rest of proceeds to Pesky Kanga's",
    }
]

class ProjectSingle extends Component {
    state = {
        initData: {},
        summaryData: {},
        overviewData: {},
        tokenmetricsData: {},
        roadmapData: {},
        socialData: [],
        overviewList: [],
        tokenList: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            summaryData: summaryData,
            overviewData: overviewData,
            tokenmetricsData: tokenmetricsData,
            roadmapData: roadmapData,
            socialData: socialData,
            overviewList: overviewList,
            tokenList: tokenList
        });
    }
    render() {
        return (
            <section className="item-details-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            {/* Project Card */}
                            <div className="card project-card no-hover">
                                <div className="media">
                                    <img className="card-img-top avatar-max-lg" src={ this.state.initData.img } alt="" />
                                    <div className="media-body ml-4">
                                        <h4 className="m-0">{ this.state.initData.title }</h4>
                                        <div className="countdown-times">
                                            <h6 className="my-2">Registration in:</h6>
                                            <div className="countdown d-flex" data-date={ this.state.initData.reg_date } />
                                        </div>
                                    </div>
                                </div>
                                {/* Project Body */}
                                <div className="card-body">
                                    <div className="items">
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <span>Total raise</span>
                                            <span> { this.state.initData.raise }</span>
                                        </div>
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <span>Valu</span>
                                            <span> { this.state.initData.val }</span>
                                        </div>
                                        {/* Single Item */}
                                        <div className="single-item">
                                            <span>Min allo</span>
                                            <span> { this.state.initData.allocation }</span>
                                        </div>
                                    </div>
                                    <div className="item-progress">
                                        <div className="progress mt-4 mt-md-5">
                                            <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{ this.state.initData.progress }</div>
                                        </div>
                                        <div className="progress-sale d-flex justify-content-between mt-3">
                                            <span>{ this.state.initData.mecha }</span>
                                            <span>{ this.state.initData.busd }</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Project Footer */}
                                <div className="project-footer d-flex align-items-center mt-4 mt-md-5">
                                    <a className="btn btn-bordered-white btn-smaller" href="/login">{ this.state.initData.actionBtn }</a>
                                    {/* Social Share */}
                                    <div className="social-share ml-auto">
                                        <ul className="d-flex list-unstyled">
                                            {this.state.socialData.map((item, idx) => {
                                                return (
                                                    <li key={`sd_${idx}`}>
                                                        <a href="/#">
                                                            <i className={ item.icon } />
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                {/* Blockchain Icon */}
                                <div className="blockchain-icon">
                                    <img src={ this.state.initData.blockchain } alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7 items mt-5 mt-lg-0">
                            <div className="card project-card single-item-content no-hover item ml-lg-4">
                                <h3 className="m-0">{this.state.summaryData.title}</h3>
                                <p>{this.state.summaryData.content_1}</p>
                                <p>{this.state.summaryData.content_2}</p>
                            </div>
                            <div className="card project-card single-item-content no-hover item p-0 ml-lg-4">
                                <div className="image-over">
                                    <img className="card-img-top" src={this.state.initData.video_img} alt="" />
                                </div>
                                <div className="card-caption col-12 p-0">
                                    <div className="card-body p-0">
                                        <div className="play-btn gallery display-yes">
                                            <a href={this.state.initData.video_link}>
                                            <i className={ this.state.initData.video_icon } />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card project-card single-item-content no-hover item ml-lg-4">
                                <h3 className="m-0">{this.state.overviewData.title}</h3>
                                <p className="mb-0">{this.state.overviewData.content}</p>
                                <h4>{this.state.overviewData.list_heading}</h4>
                                <ul>
                                    {this.state.overviewList.map((item, idx) => {
                                        return (
                                            <li key={`odl_${idx}`}>{item.content}</li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="card project-card single-item-content no-hover item ml-lg-4">
                                <h3 className="m-0">{this.state.tokenmetricsData.title}</h3>
                                <p>{this.state.tokenmetricsData.content}</p>
                                {/* Token Content */}
                                <div className="table-responsive">
                                    <table className="table token-content table-borderless table-sm">
                                        <tbody>
                                            {this.state.tokenList.map((item, idx) => {
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
                                <h3 className="m-0">{this.state.roadmapData.title}</h3>
                                <p>{this.state.roadmapData.content_1}</p>
                                <p>{this.state.roadmapData.content_2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectSingle;