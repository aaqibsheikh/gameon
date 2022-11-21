import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Reset from '../components/Reset/Reset';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const ResetPage = () => {
        return (
            <div className="main">
                <Header />
                <Reset />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default ResetPage;