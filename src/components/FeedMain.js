import React from 'react'
import { Comment } from './Comment'

export const FeedMain = () => {

    const imgUrl = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268'

    return (
        <div className='feed_main'>
            <div className='feed_main_header'>
                <div className='feed_main_header_detail'>
                    <div className='feed_main_header_profile'><img src={imgUrl} alt="" /></div>
                    <div className='feed_main_header_name'>
                        <h2>ylerson</h2>
                        <span>Maribua, india</span>
                    </div>

                </div>
                <div>...</div>
            </div>
            <div className='main_imagen'>
                <img src={imgUrl} alt="" />
                
            </div>
            <div className='feed_main_action'>
            <div className='feed_main_action_buttons'>
                <i className='bx bxs-heart icon_feed' ></i>              
                <i className='bx bxs-comment icon_feed' ></i>  
                <i className='bx bxs-send icon_feed' ></i>              
            </div>
                
            <i className='bx bxs-bookmark icon_feed' ></i>          
            </div>
            <div className='feed_main_likes'> <span>Liked by name and 254 others</span> <div></div>  </div>
            <Comment />
        </div>
    )
}
