import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

const Backdrop = () => {
    return (
        <div className='backdrop'></div>
    )
}

const ModalWindow = ({ children }) => {
    return (
        <div className='modal'>
            <div className='content'>{children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays')

const Modal = ({ children }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
        </>
    )
};

export default Modal;