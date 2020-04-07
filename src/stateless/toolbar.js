import React from 'react';
import classes from './toolbar.module.css';
import Logo from './utils/logo';

const Toolbar = (props) => (
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <div><Logo/></div>
            <nav>...</nav>
        </header>
)

export default Toolbar