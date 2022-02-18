import React, { createContext, useState } from "react";


export const ModalContext = createContext(false)

export const ModalProvider = ({ children }) => {
    const [isActive, setActive] = useState('');

    const handleOpenModal = () => {
        setActive(true)
    }
    
    const handleCloseModal = ()=>{
        setActive(false)
      }

    return (
        <ModalContext.Provider value={{ isActive, handleOpenModal, handleCloseModal}}>
            {children}
        </ModalContext.Provider>
    )
    
}