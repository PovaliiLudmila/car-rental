import React from 'react';
import { NavLink } from react-router-dom;
const pages = [
    { title: 'Home', path: '/' },
    { title: 'Register', path: '/register' },
    { title: 'Login', path: '/login' },
    { title: 'Contact', path: '/contact' },
]
export const SharedLayout = () => {
    return <div>
        <div>
            <ul>
                {pages.map(({ title, path }) => {
                 return (
                 <li key={title}>
                    <NavLink to={path}>{title}</NavLink>
                 </li> 
                 );
                })}
            </ul>
        </div>
        <Outlet />
    </div>
}