import React from 'react'

export const YourStoriesProfile = () => {

    const imgUrl = 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268'

    return (
        <div className='stories_profile'>
            <div className='frame_stories'><div className='frame_stories_img'><img src={imgUrl} alt="" /></div>  <span>Featured</span></div>
            <div className='frame_stories'><div className='frame_stories_img'><img src={imgUrl} alt="" /></div><span>Featured</span></div>
            <div className='frame_stories'><div className='frame_stories_img'><img src={imgUrl} alt="" /></div> <span>Featured</span></div>
            <div className='frame_stories'><div className='frame_stories_img'><img src={imgUrl} alt="" /></div> <span>Featured</span></div>
           
        </div>
    )
}
