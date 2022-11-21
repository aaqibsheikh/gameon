import React, { Component } from 'react';

const initData = {
    img: "/img/LilWhale.png",
    blockchain: "/img/3635.png",
    title: "Lil Whale",
    reg_date: "2022-11-30",
    raise: "50k",
    val: "$5000",
    allocation: "$0",
    progress: "0%",
    mecha: "1000 SUPPLY",
    busd: "50 Cro",
    actionBtn: "Claim Token",
    video_img: "/img/lil.png",
    video_icon: "fa-solid fa-play",
    video_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

const summaryData = {
    title: "Project Summary",
    content_1: "Introducing the first NFT Scratch card game on Cronos, bought to you by Roo Finance. Earn up to 5000 Cro with 500 chances of winning a prize! That’s means 1 out of two tickets win, with up to x100 returns.",
    content_2: ""
}

const overviewData = {
    title: "Prize distribution",
    list_heading: "How does it work?",
    content: "In total, we will be distributing more than 45,000 Cro in rewards and a total value of 51,700 Cro in Prizes.",
}

const tokenmetricsData = {
    title: "Hosted by CroArmy",
    content: "We have partnered with our friends at CroArmy to bring you Lil Whale Scratch cards. Joey is even doxed to team"
}

const roadmapData = {
    title: "How are Prizes distributed?",
    content_1: "All prizes are automatically delivered by checking Cronoscan and will be airdropped automatically within 24 hours from minting (If you win).",
    content_2: "We will pay out on Game 1,2,3 within 24 hours, so you will not need to wait for the mint to end. The Jackpot are completed at the end of the mint."
}

const socialData = [
    {
        id: "1",
        link: "twitter",
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
        content: "Match 3 Symbols to Win a Prize (Variable Prize)",
    },
    {
        id: "2",
        content: "Match your NFT to Win a Cromatoe",
    },
    {
        id: "3",
        content: "Find a Whale to Win 250 Cro",
    },
    {
        id: "4",
        content: "At the end of the mint, one winner will win 5000 Cro!",
    }
]

const tokenList = [
    {
        id: "1",
        title: "Raise",
        content: "50,000 Cro",
    },
    {
        id: "2",
        title: "Chance of winning",
        content: "1/2",
    },
    {
        id: "3",
        title: "Prize pool",
        content: "42,000 Cro + 50 Cromatoes + Pesky Kanga's",
    },
   
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