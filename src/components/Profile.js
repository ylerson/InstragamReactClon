import React, {useContext} from 'react';
import {ModalContext} from '../context/modalContext';
import {BiographyProfile} from './BiographyProfile';
import {Button} from './Button';
import {CreatePostModal} from './upload/CreatePostModal';
import {InfoProfile} from './InfoProfile';
import {YourStoriesProfile} from './YourStoriesProfile';

export const Profile = () => {
    const {handleOpenModal} = useContext(ModalContext);

    return (
        <div className="relative">
            <div className="main_profile">
                <div className="notification_box">
                    <div className="notification_icon">
                        <img src="assets/bell.png" alt="" />
                    </div>
                </div>
                <InfoProfile />
                <BiographyProfile />
                <span className="main_profile_title">Your Stories</span>
                <YourStoriesProfile />
                <Button
                    value="Create Post"
                    nameClass="create_post btn"
                    handle={handleOpenModal}
                />
            </div>
            <CreatePostModal />
        </div>
    );
};
