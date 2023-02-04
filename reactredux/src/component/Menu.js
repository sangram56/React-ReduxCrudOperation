import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
    return(
        <nav className='navbar navbar-expand-md navbar-light bg-danger fw-bold'>
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Redux-CRUD</NavLink>

                <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#menu'>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/home`} className={'nav-link'}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/create`} className={'nav-link'}>Create</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu