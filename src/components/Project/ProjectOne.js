import React, { Component } from 'react';

const initData = {
    sub_heading: "Project",
    heading: "Upcoming Launches",
    btn: "View More",
    actionBtn: "Mint"
}

const data = [
    {
        id: "1",
        img: "/img/PeskyKanga.png",
        title: "Pesky Kanga",
        reg_date: "2022-11-30",
        raise: "187k",
        val: "2057",
        progress: "0%",
        mecha: "2800 SUPPLY",
        busd: "0 CRO",
        action: "/Pesky-Kanga",
        
    },
    {
        id: "2",
        img: "/img/LilWhale.png",
        title: "Lil Whale Scratch Card",
        reg_date: "2022-11-30",
        raise: "50k",
        val: "$5500",
        allocation: "$0",
        progress: "0%",
        mecha: "1000 SUPPLY",
        busd: "50 Cro",
        action: "/Lil-Whale",
    },
    {
        id: "3",
        img: "/img/cute.png",
        title: "Loaded Lion Raffle",
        reg_date: "2022-11-30",
        raise: "30k",
        val: "$3000",
        allocation: "$0",
        progress: "0%",
        mecha: "250 SUPPLY",
        busd: "100 Cro",
        action: "Loaded-Lion",
    },
    {
        id: "4",
        img: "/img/apes.gif",
        title: "LadyApes V2",
        reg_date: "2022-12-28",
        raise: "553k",
        val: "$60,000",
        allocation: "$0",
        progress: "0%",
        mecha: "TBC SUPPLY",
        busd: "75 Cro",
        action: "Lady-apes",
    },
    {
        id: "5",
        img: "/img/cruiser.jpg",
        title: "Cronos Cruiser Raffle",
        reg_date: "2022-01-30",
        raise: "10k",
        val: "$1000",
        allocation: "$0",
        progress: "0%",
        mecha: "300 SUPPLY",
        busd: "25 CRO",
        action: "Cronos-Cruiser",
    }
]

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

class ProjectOne extends Component {
    state = {
        initData: {},
        data: [],
        socialData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data,
            socialData: socialData
        });
    }
    render() {
        return (
            <section id="explore" className="project-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span className="intro-text">{ this.state.initData.sub_heading }</span>
                                    <h3 className="mt-3 mb-0">{ this.state.initData.heading }</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="/projects">{ this.state.initData.btn }</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-slides">
                        <div className="swiper-container slider-mid items">
                            <div className="swiper-wrapper">
                                {this.state.data.map((item, idx) => {
                                    return (
                                        <div key={`pd_${idx}`} className="swiper-slide item">
                                            <div className="card project-card">
                                                <div className="media">
                                                    <a href="/projects">
                                                        <img className="card-img-top avatar-max-lg" src={ item.img } alt="" />
                                                    </a>
                                                    <div className="media-body ml-4">
                                                        <a href="/projects">
                                                            <h4 className="m-0">{ item.title }</h4>
                                                        </a>
                                                        <div className="countdown-times">
                                                            <h6 className="my-2">Starting in:</h6>
                                                            <div className="countdown d-flex" data-date={ item.reg_date } />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project Body */}
                                                <div className="card-body">
                                                    <div className="items">
                                                        {/* Single Item */}
                                                        <div className="single-item">
                                                            <span>Total raise</span>
                                                            <span> { item.raise }</span>
                                                        </div>
                                                        {/* Single Item */}
                                                        <div className="single-item">
                                                            <span>Value</span>
                                                            <span> { item.val }</span>
                                                        </div>
                                                        {/* Single Item */}
                                                        <div className="single-item">
                                                            <span>Min allo</span>
                                                            <span> { item.allocation }</span>
                                                        </div>
                                                    </div>
                                                    <div className="item-progress">
                                                        <div className="progress mt-4 mt-md-5">
                                                            <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>{ item.progress }</div>
                                                        </div>
                                                        <div className="progress-sale d-flex justify-content-between mt-3">
                                                            <span>{ item.mecha }</span>
                                                            <span>{ item.busd }</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Project Footer */}
                                                <div className="project-footer d-flex align-items-center mt-4 mt-md-5">
                                                    <a className="btn btn-bordered-white btn-smaller" href={ item.action } >{ this.state.initData.actionBtn }</a>
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
                                                    <img src={ item.blockchain } alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectOne;