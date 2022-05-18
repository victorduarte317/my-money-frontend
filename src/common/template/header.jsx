import React from 'react'
import Navbar from './navbar'

export default props => (
    <header className="main-header">
        <nav className="navbar navbar-static-top">
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)
