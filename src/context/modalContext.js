import React, {createContext, useState} from 'react';

export const ModalContext = createContext(false);

export const ModalProvider = ({children}) => {
    const [isActive, setActive] = useState('');
    const [isBack, setIsBack] = useState(false);
    const [croppedImage, setCroppedImage] = useState(null);
    const [nextImage, setNextImage] = useState(false);

    const [showImage, setShowImage] = useState(false);

    const handleOpenModal = () => {
        setActive(true);
    };

    const handleCloseModal = () => {
        setActive(false);
    };

    const handleBack = () => {
        setIsBack(true);
        console.log('back');
    };
    const handleDismountBack = () => {
        setIsBack(false);
    };

    const handleNextImage = () => {
        setNextImage(true);
        showImage();
    };

    return (
        <ModalContext.Provider
            value={{
                isActive,
                handleOpenModal,
                handleCloseModal,
                handleBack,
                isBack,
                handleDismountBack,
                handleNextImage,
                setCroppedImage,
                nextImage,
                setNextImage,
                croppedImage,
                setShowImage,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
