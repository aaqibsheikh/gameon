import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Project from '../components/Project/Projects';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const projects = () => {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Projects" subpage="Project" page="Projects" />
                <Project />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
    
}

export default projects;