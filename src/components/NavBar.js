import React from 'react'
import { SearchInput } from './SearchInput'

export const NavBar = () => {
    return (
        <div className='main_navbar'>
            <div className='logo'><img src="assets/ig-logo.png" alt="" /></div>
            <SearchInput />
        </div>
    )
}
