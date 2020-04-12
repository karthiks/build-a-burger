import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import Button from './button';

export default {
    title: 'Common | Utils/Button',
    component: Button,
    // decorators: [withKnobs],
};

export const Normal = () => {
    // Knobs for React props
    const label = 'Button Type';
    const options = ['Normal', 'Success', 'Danger']; //Options can be array or map!
    const defaultValue = 'Normal';
    const groupId = 'App-Button-Type';
    const buttonType = select(label, options, defaultValue, groupId);
    // Knobs as dynamic variables.
    const content = text("Content", "Normal Button", groupId);

    return (
        <Button
            buttonType={buttonType}
            clicked={action('Normal buttonType clicked')}>
            {content}
        </Button>
    );
};

export const Success = () => {
    // Knobs for React props
    const label = 'Button Type';
    const options = ['Normal', 'Success', 'Danger']; //Options can be array or map!
    const defaultValue = 'Success';
    const groupId = 'App-Button-Type';
    const buttonType = select(label, options, defaultValue, groupId);
    // Knobs as dynamic variables.
    const content = text("Content", "Success Button", groupId);

    return (
        <Button
            buttonType={buttonType}
            clicked={action('Success buttonType clicked')}>
            {content}
        </Button>
    );
};

export const Danger = () => {
    // Knobs for React props
    const label = 'Button Type';
    const options = ['Normal', 'Success', 'Danger']; //Options can be array or map!
    const defaultValue = 'Danger';
    const groupId = 'App-Button-Type';
    const buttonType = select(label, options, defaultValue, groupId);
    // Knobs as dynamic variables.
    const content = text("Content", "Danger Button", groupId);

    return (
        <Button
            buttonType={buttonType}
            clicked={action('Danger buttonType clicked')}>
            {content}
        </Button>
    );
};