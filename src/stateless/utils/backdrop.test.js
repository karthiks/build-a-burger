import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './backdrop';

const COMPONENT_UNDER_TEST = '<Backdrop />';
const myMockCallback = jest.fn();

describe(COMPONENT_UNDER_TEST, () => {
    it('should be visible when props.show is true', ()=>{
        const wrapper = shallow(<Backdrop show={true} cancel={myMockCallback} />);
        expect(wrapper.find('div.Backdrop').exists()).toBe(true);
    });

    it('should NOT be visible when props.show is false', () => { 
        const wrapper = shallow(<Backdrop show={false} cancel={myMockCallback} />);
        // expect(wrapper.find('div.Backdrop').exists()).toBe(false);
        expect(wrapper).toBeEmptyRender();
    });
});
