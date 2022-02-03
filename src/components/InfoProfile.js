import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export const InfoProfile = () => {

    const imgUrl = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268'


    return (
        <div className='info_profile'>
            <div className='frame_avatar'><div className='avatar_imagen'><img src={imgUrl} alt="foto perfil" /></div> </div>
            <div className='name_profile'>
                <h2>Ylerson Alonte</h2>
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
