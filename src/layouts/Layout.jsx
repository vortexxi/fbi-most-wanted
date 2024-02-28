import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <> 
            <h3 className='title'>FBI most wanted</h3>
            <div className='container'>
                <Outlet />
            </div>
        </>
    )
}
