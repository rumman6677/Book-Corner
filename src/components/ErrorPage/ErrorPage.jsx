import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl">404</h2>

            <h2 className="text-5xl">Page not found</h2>
            <NavLink to='/'><li><a>Home</a></li></NavLink>
        </div>
    );
};

export default ErrorPage;