import React from 'react'
import { BiographyProfile } from './BiographyProfile'
import { InfoProfile } from './InfoProfile'
import { YourStoriesProfile } from './YourStoriesProfile'

export const Profile = () => {
    return (
        <div className='main_profile'>
           <div className='notification_box'><div className='notification_icon'> <img src="assets/bell.png" alt="" /></div></div>
           <InfoProfile />
           <BiographyProfile />
           <span className='main_profile_title'>Your Stories</span>
           <YourStoriesProfile />
            <button className='create_post'> Create Post</button>

        </div>
    )
}
