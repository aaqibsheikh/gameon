import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Project from '../components/Project/LilWhale';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const LilWhale = () => {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Project" subpage="Scratch Card" page="Lil Whale" />
                <Project />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default LilWhale;