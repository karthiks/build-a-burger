import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button';

export default {
    title: 'Common | Utils/Button',
    component: Button,
};

export const Normal = () => (
    <Button
        buttonType="Normal"
        clicked={action('Normal buttonType clicked')}>
            Normal Button
    </Button>
);

export const Success = () => (
    <Button
        buttonType="Success"
        clicked={action('Success buttonType clicked')}>
        Success Button
    </Button>
);

export const Danger = () => (
    <Button
        buttonType="Danger"
        clicked={action('Danger buttonType clicked')}>
        Danger Button
    </Button>
);