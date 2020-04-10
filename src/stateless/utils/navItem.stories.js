import React from 'react';
import { action } from '@storybook/addon-actions';
import NavItem from './navItem';

export default {
    title: 'App | Common/Navigation',
    component: NavItem,
};

export const ActiveNavItem = () => <NavItem link='/relative_path' active={true}>Active NavItem</NavItem>;

export const InactiveNavItem = () => <NavItem link='/relative_path' style={{color:"red"}}>Inactive NavItem</NavItem>;