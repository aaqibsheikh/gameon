import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Staking from '../components/Staking/StakingTwo';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const StakingTwo = () => {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Staking NFT" subpage="NFT Staking" page="NFT Staking" />
                <Staking />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default StakingTwo;