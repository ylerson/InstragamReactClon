import React, {useContext, useState} from 'react';
import {ModalContext} from '../../context/modalContext';

export const HeaderModal = () => {
    const {handleBack, handleNextImage} = useContext(ModalContext);

    return (
        <header className="header__upload">
            <button onClick={handleBack}>
                <img src="assets/back.png" alt="back" />
            </button>
            <span>Crop</span>
            <button onClick={handleNextImage}>Next</button>
        </header>
    );
};
