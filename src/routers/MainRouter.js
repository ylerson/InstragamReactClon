import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRouter } from './AppRouter'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const MainRouter = () => {
    return (
    
      <Routes>

            <Route path="/login" element={<LoginPage />}/>
            <Route path="/register" element={<RegisterPage />}/>

            <Route path="*" element={ <AppRouter/>}/>



      </Routes>
    )
}
