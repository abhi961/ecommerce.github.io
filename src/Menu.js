import React from 'react';
import { NavLink } from 'react-router-dom/';


 const Menu = () => {
    return(
        <>
        <NavLink exact activeClassName="avtive_class" to="/">
            Homepage
        </NavLink>
        <NavLink activeClassName="avtive_class" to="/Aboutus">
            About us
        </NavLink>
        <NavLink activeClassName="avtive_class" to="/Service">
            Service
        </NavLink>
        </>
    )  
};

export default Menu;