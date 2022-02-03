import React from 'react'
import { FeedMain } from '../components/FeedMain'

export const HomePage = () => {
    return (
        <div className='container_main'>
            <div className='container_grid'>
                <FeedMain />
               
                <FeedMain />
                <FeedMain />
            </div> 
        </div>
    )
}
