import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <div className='main-title-container'>
                <h3 className='title'>FBI 20 most wanted</h3>
            </div>

            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}
