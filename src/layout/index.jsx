import React from 'react'

//style
import './layout.scss';

//components
import Modal from '../components/modal';
import Toast from '../components/toast';

const Layout = ({ children }) => {
    return (
        <div className="appLayout">
            <div className="appLayout-container">
                <div className="appLayout-header">
                    <span className="appLayout-logo">Hepsiburada</span>
                    <span className="appLayout-title">LinkVote Challange</span>
                </div>
                {children}
            </div>
            <Toast />
            <Modal />
        </div>
    );
}

export default Layout;
