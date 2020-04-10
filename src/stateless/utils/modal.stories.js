import React from 'react';
import { action } from '@storybook/addon-actions';
import Modal from './modal';

export default {
    title: 'Common | Utils/Modal',
    component: Modal,
};

export const ModalWithBackdrop = () => (
    <Modal
        visibility={true}
        hide={action('clicked outside to hide modal..')}>
        <h1>Your content goes here...</h1>
    </Modal>
);

