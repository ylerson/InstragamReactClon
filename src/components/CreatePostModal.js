import React, { useContext } from 'react';
import { ModalContext } from '../context/modalContext';
import { Button } from './Button';

export const CreatePostModal = () => {

    const { isActive, handleCloseModal } = useContext(ModalContext);

    const closeAsset = <img src="assets/close.png" alt="" />; 
    return (
        <>
            <div className={isActive ? 'shadow-bg active' : 'shadow-bg' }> 
                <Button value={closeAsset} nameClass='btn' handle={handleCloseModal} />
            </div>
            <div className={isActive ? 'modal active' : 'modal' }>
                <header>Create a New Post</header>
                <section>
                    <h3>Drag Photos and Videos here</h3> 
                    <label htmlFor="upload">Select from computer</label> 
                    <input type="file" name="upload" id="upload" hidden/>   
                </section>   
            </div>
        </>
  
    );
};
