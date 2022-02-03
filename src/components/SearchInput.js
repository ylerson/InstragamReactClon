import React from 'react'

export const SearchInput = () => {
    return (
        <div className='navbar_search'>
            <div className='search_icon'><img src="assets/search.png" alt="" /></div>
            <input 
                type="text"
                className='search_input'
                placeholder='Search'
                />
        </div>
    )
}
