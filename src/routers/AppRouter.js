import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { ModalProvider } from '../context/modalContext'


import { HomePage } from '../pages/HomePage'
import { ExplorePage } from '../pages/ExplorePage'
import { IGVideoPage } from '../pages/IGVideoPage'
import { LikePage } from '../pages/LikePage'
import { MessegerPage } from '../pages/MessegerPage'
import { SavePage } from '../pages/SavePage'
import { ReelPage } from '../pages/ReelPage'
import { Sidebar } from '../components/Sidebar'
import { NavBar } from '../components/NavBar'
import { Profile } from '../components/Profile'

export const AppRouter = () => {

    const tokenUser = JSON.parse(sessionStorage.getItem('tokenUser'))
    const navigate = useNavigate()

   
    useEffect(() => {
        if(tokenUser?.status !== 'connected'){
            navigate('/login', {replace: true})
        }
    }, [])

    return (<>

        <NavBar/>
        <Sidebar />
        <ModalProvider >
        <Profile />

        </ModalProvider>
        
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/explore" element={<ExplorePage />}/>
            <Route path="/videotv" element={<IGVideoPage />}/>
            <Route path="/like" element={<LikePage />}/>
            <Route path="/messeger" element={<MessegerPage />}/>
            <Route path="/save" element={<SavePage />}/>
            <Route path="/reel" element={<ReelPage />}/>

        </Routes>
        
        </>
    )
}
