import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand span' to='/'>
                My Shoes
            </Link>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <span className='nav-item nav-link active span' href='#'>
                        <Link to='/'>Main</Link>
                    </span>
                    <span className='nav-item nav-link span' href='#'>
                        <Link to='/new'>New</Link>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;