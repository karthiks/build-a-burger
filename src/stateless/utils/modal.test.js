import React from 'react';
import { shallow } from 'enzyme';
import Modal from './modal';
import Backdrop from './backdrop';

const COMPONENT_TO_TEST = '<Modal />';
const myMockCallback = jest.fn();

describe(COMPONENT_TO_TEST, ()=> {
    it('should render NULL when props.orderNow is False', ()=>{
        const wrapper = shallow(<Modal orderNow={false} cancelOrder={myMockCallback} />);
        expect(wrapper.type()).toBeNull();
    });
    
    it('should render Backdrop when props.orderNow is True', ()=>{
        const cut = <Modal orderNow={true} cancelOrder={myMockCallback} />;
        const wrapper = shallow(cut);
        const backdrop = wrapper.find(Backdrop);
        expect(backdrop.exists()).toBe(true);
    });

    it('should render Div with class Modal when props.orderNow is True', () => {
        const cut = <Modal orderNow={true} cancelOrder={myMockCallback} />;
        const wrapper = shallow(cut);
        const divModal = wrapper.find('div.Modal');
        expect(divModal.exists()).toBe(true);
    });
});