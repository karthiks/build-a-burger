import React from 'react';
import Aux from '../hoc/_aux'
import classes from './layout.module.css';
import Toolbar from './toolbar';

const Layout = (props) => (
    <Aux>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;