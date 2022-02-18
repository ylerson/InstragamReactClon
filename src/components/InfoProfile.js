
import React, { useEffect, useState } from 'react';
import { userFetch } from '../data/userData';

export const InfoProfile = () => {

    
    const [user, setUser] = useState(null)
    const getId = sessionStorage.getItem('iDUser') !== 'undefined' ? sessionStorage.getItem('iDUser') : null; 
    

    useEffect(()=>{
        userFetch(getId, setUser)
    },[])


        
    return (
        <div className='info_profile'>
            <div className='frame_avatar'><div className='avatar_imagen'><img src={user?.image} alt="foto perfil" /></div> </div>
            <div className='name_profile'>
                <h2>{user?.userName}</h2>
                <span>Wildlife Photographer</span>
            </div>
            <div className='button_edit'>
                <button>Edit</button>
            </div>
            <div className='data_profile'>
                <div className='data_profile_info'>
                    <span className='type_data_value'>98</span>
                    <span className='type_data_name'>Post</span>
                </div>
                <div className='data_profile_info'>
                    <span  className='type_data_value'>3.5k</span>
                    <span className='type_data_name'>Followers</span>
                </div>
                <div className='data_profile_info'>
                    <span  className='type_data_value'>900</span>
                    <span className='type_data_name'>Followings</span>
                </div>
            </div>
        </div>
    )
}
