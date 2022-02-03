import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {

    const [isOpen, setOpen] = useState(false)

    const handleOpen = ()=>{
        setOpen(!isOpen)
    }

   const handleLogout = ()=>{
        sessionStorage.clear()
   }
    return (
        <div className='main_sidebar'>
            <ul>
                <li className='icon_sidebar'> <NavLink to="/" className={({isActive})=> isActive ? 'active' : ''}><img src="assets/home.png" alt="" /></NavLink> </li>
                <li className='icon_sidebar'> <NavLink to="/messeger" className={({isActive})=> isActive ? 'active' :''}><img src="assets/messenger.png" alt="" /></NavLink> </li>
                <li className='icon_sidebar'> <NavLink to="/explore" className={({isActive})=> isActive ? 'active' : ''}> <img src="assets/direction.png" alt="" /></NavLink></li>
                <li className='icon_sidebar'> <NavLink to="/like" className={({isActive})=> isActive ? 'active' : ''}><img src="assets/heart.png" alt="" /></NavLink> </li>
                <li className='icon_sidebar'> <NavLink to="/videotv" className={({isActive})=> isActive ? 'active' : ''}><img src="assets/broadcast.png" alt="" /></NavLink></li>
                <li className='icon_sidebar'> <NavLink to="/reel" className={({isActive})=> isActive ? 'active' : ''}><img src="assets/tv-monitor.png" alt="" /> </NavLink></li>
                <li className='icon_sidebar'> <NavLink to="/save" className={({isActive})=> isActive ? 'active' : ''}><img src="assets/bookmark.png" alt="" /></NavLink></li>
            </ul>
            <div className='icon_settings_sidebar'>
                <div className={isOpen ? 'icon_hidden_sidebar--active icon_hidden_sidebar' : 'icon_hidden_sidebar'}>
                <img src="assets/settings.png" alt="" />
                <button className="more_button" onClick={handleLogout}><img src="assets/logout.png" alt="" /></button>
                    
                </div>
                <button className="more_button" onClick={handleOpen}><img src="assets/align-left.png" className={ isOpen ? 'more_button--active': ''} alt="" /></button>
             </div>
        </div>
    )
}
