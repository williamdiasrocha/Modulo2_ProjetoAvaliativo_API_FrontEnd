import React, { useState, useEffect, useContext } from 'react';
import '../Toolbar/Toolbar.css'
import { AuthContext } from '../../../Context/AuthContext';

function Toolbar({ pageTitle, usuarios }) {

    const isLoginPage = pageTitle === 'Login';
    const { isLoggedIn, user } = useContext(AuthContext);
    const { logout } = useContext(AuthContext);
    
    return (
        <nav className="navbar" id='navbarApi'>
            <div className="container-fluid">
                <span className="navbar h6" id='spanNav'>{pageTitle}</span>
                {!isLoginPage && user && (
                    <div className='user-menu'>
                        <div className='user-info'>
                            <span className='user-name'>{user.name}</span>
                            <img className='user-photo' src='../src/assets/user.png' alt='User' />
                        </div>
                        <button onClick={logout} className='btn btn-danger btn-sair'>Sair</button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Toolbar;