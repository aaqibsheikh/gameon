import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Project from '../components/Project/ProjectFour';
import Cta from '../components/Cta/Cta';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const ProjectTwo = () => {
        return (
            <div className="main">
                <Header />
                <Breadcrumb title="Projects" subpage="Project" page="Project" />
                <Project />
                <Cta />
                <Footer />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default ProjectTwo;