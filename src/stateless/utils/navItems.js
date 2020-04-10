import React from 'react';
import classes from './navItems.module.css';
import NavItem from './navItem'

const NavItems = () => {
    return (
        <ul className={classes.NavItems} >
            <NavItem link='/' active={true}>Burger Builder</NavItem>
            <NavItem link='/'>Checkout</NavItem>
        </ul>
    )
}
export default NavItems