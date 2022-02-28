import React, {useContext, useEffect, useRef, useState} from 'react';
import {ModalContext} from '../../context/modalContext';
import {Button} from '../Button';
import {FilterImage} from './FilterImage';
import {HeaderModal} from './HeaderModal';
import {Upload} from './Upload';
import {ViewPostFile} from './ViewPostFile';

export const CreatePostModal = () => {
    const {
        isActive,
        handleCloseModal,
        isBack,
        handleDismountBack,
        nextImage,
        setNextImage,
        croppedImage,
    } = useContext(ModalContext);

    const [image, setImage] = useState('');
    const [isUpload, setUpload] = useState(false);

    const handleUpload = (e) => {
        const url = URL.createObjectURL(e.target.files[0]);
        setImage(url);
        setUpload(true);
    };

    useEffect(() => {
        if (!isActive) {
            setImage('');
            setUpload(false);
        }
    }, [isActive]);

    useEffect(() => {
        if (isBack) {
            setImage('');
            setUpload(false);
            handleDismountBack();
            setNextImage(false);
        }
    }, [isBack]);
    console.log(croppedImage);

    const closeAsset = <img src="assets/close.png" alt="" />;
    return (
        <>
            <div className={isActive ? 'shadow-bg active--modal' : 'shadow-bg'}>
                <Button
                    value={closeAsset}
                    nameClass="btn"
                    handle={handleCloseModal}
                />
            </div>
            <div className={isActive ? 'modal active--modal' : 'modal'}>
                {isUpload ? (
                    <HeaderModal />
                ) : (
                    <header>Create a New Post</header>
                )}
                <section>
                    {isUpload ? (
                        nextImage ? (
                            <FilterImage data={croppedImage} />
                        ) : (
                            <ViewPostFile data={image} />
                        )
                    ) : (
                        <Upload handleUpload={handleUpload} />
                    )}
                </section>
            </div>
        </>
    );
};
