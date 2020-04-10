import React from 'react';
import { action } from '@storybook/addon-actions';
import Backdrop from './backdrop';

export default {
    title: 'Common | Utils/Backdrop',
    component: Backdrop,
};

export const TintedBackdrop = () => (
    <Backdrop visibility={true} hide={action('clicked to hide me..')} />
);

