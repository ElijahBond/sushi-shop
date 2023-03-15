import React from 'react';
import ReactDOM from 'react-dom';

import './modal.scss';

const Backdrop = ({ thisHideCart }) => {
    return (
        <div
            onClick={() => thisHideCart()}
            className='backdrop'></div>
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

const Modal = ({ onHideCartForBackdrop, children }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop thisHideCart={onHideCartForBackdrop} />, portalElement)}
            {ReactDOM.createPortal(<ModalWindow>{children}</ModalWindow>, portalElement)}
        </>
    )
};

export default Modal;