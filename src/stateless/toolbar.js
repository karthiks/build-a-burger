import React from 'react';
import classes from './toolbar.module.css';
import Logo from './utils/logo';
import NavItems from './utils/navItems';

const Toolbar = (props) => (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div><Logo/></div>
            <nav><NavItems/></nav>
        </header>
)

export default Toolbar