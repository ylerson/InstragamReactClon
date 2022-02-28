import React, {useCallback, useContext, useEffect, useState} from 'react';
import Cropper from 'react-easy-crop';
import {ModalContext} from '../../context/modalContext';
import getCroppedImg from '../../utils/cropImage';

export const ViewPostFile = ({data = ''}, onZoom) => {
    const [zoom, setZoom] = useState(1);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const {setCroppedImage, setShowImage} = useContext(ModalContext);

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(data, croppedAreaPixels);
            console.log('donee', {croppedImage});
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels]);

    const handleInputChange = (e) => {
        setZoom(e.target.value);
    };

    useEffect(() => {
        setShowImage(showCroppedImage);
    }, [croppedAreaPixels]);

    return (
        <>
            <Cropper
                image={data}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
            />
            <footer>
                <input
                    type="range"
                    min={1}
                    max={3}
                    step={0.1}
                    className="range-zoom"
                    onChange={handleInputChange}
                    value={zoom}
                />
            </footer>
        </>
    );
};
