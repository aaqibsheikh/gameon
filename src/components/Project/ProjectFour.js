import React, { Component } from 'react';

const initData = {
    sub_heading: "Exclusive",
    heading: "Kanga LaunchPad",
    content: "Take a look at our upcoming projects... ",
    actionBtn: "Participate",
    filter_1: "All",
    filter_2: "Ongoing",
    filter_3: "Upcoming",
    filter_4: "Ended "
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
        busd: "0 CRO",
        action: "/pesky-kanga",
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
        busd: "50 Cro",
        action: "/lil-whale",
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
        busd: "100 Cro",
        action: "/loaded-lion",
        
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
        busd: "75 Cro",
        action: "/lady-apes",
    },
    {
        id: "5",
        img: "/img/cruiser.jpg",
        title: "Cronos Cruiser Raffle",
        reg_date: "2023-01-30",
        raise: "10k",
        val: "$1000",
        allocation: "$0",
        progress: "0%",
        busd: "100 CRO",
        action: "/cronos-cruiser",

        
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

class ProjectFour extends Component {
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
            <section className="project-area explore-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-7">
                            {/* Intro */}
                            <div className="intro text-center">
                                <div className="intro-content">
                                    <span className="intro-text">{ this.state.initData.sub_heading }</span>
                                    <h3 className="mt-3 mb-0">{ this.state.initData.heading }</h3>
                                    <p>{ this.state.initData.content }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            {/* Explore Menu */}
                            <div className="explore-menu btn-group btn-group-toggle flex-wrap justify-content-center text-center mb-md-4" data-toggle="buttons">
                                <label className="btn active d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="all" defaultChecked className="explore-btn" />
                                    <span>{this.state.initData.filter_1}</span>
                                </label>
                                <label className="btn d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="ongoing" className="explore-btn" />
                                    <span>{this.state.initData.filter_2}</span>
                                </label>
                                <label className="btn d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="upcoming" className="explore-btn" />
                                    <span>{this.state.initData.filter_3}</span>
                                </label>
                                <label className="btn d-table text-uppercase p-2">
                                    <input type="radio" defaultValue="ended" className="explore-btn" />
                                    <span>{this.state.initData.filter_4}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row explore-items items inner">
                        {this.state.data.map((item, idx) => {
                            return (
                                <div key={`pd_${idx}`} className="col-12 col-md-6 col-lg-4 item explore-item" data-groups={item.group}>
                                    <div className="card project-card">
                                        <div className="media">
                                            <a href="/project-single">
                                                <img className="card-img-top avatar-max-lg" src={ item.img } alt="" />
                                            </a>
                                            <div className="media-body ml-4">
                                                <a href="/project-single">
                                                    <h4 className="m-0">{ item.title }</h4>
                                                </a>
                                                <div className="countdown-times">
                                                    <h6 className="my-2">Registration in:</h6>
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
                                                    <span>Valu</span>
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
                                            <a className="btn btn-bordered-white btn-smaller" href={ item.action }>{ this.state.initData.actionBtn }</a>
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
                </div>
            </section>
        );
    }
}

export default ProjectFour;