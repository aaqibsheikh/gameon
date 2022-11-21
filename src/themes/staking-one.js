import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Staking from '../components/Staking/StakingOne';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const StakingOne = () => {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Staking " subpage="Roo" page="Staking" />
                <Staking />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default StakingOne;