import React from 'react';
import classes from './navItem.module.css';

const NavItem = (props) => {
    console.log(props.active);
    return (
        <li className={classes.NavItem}>
            <a to={props.link} className={props.active ? classes.active : null}>
                {props.children}
            </a>
        </li>
    )
}

NavItem.defaultProps = {
    active: false,
    link: '/'
}

export default NavItem