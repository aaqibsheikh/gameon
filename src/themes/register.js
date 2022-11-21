import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Register from '../components/Register/Register';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';

const RegisterPage = () => {
        return (
            <div className="main">
                <Header />
                <Register />
                <ModalSearch />
                <ModalMenu />
            </div>
        );
}

export default RegisterPage;