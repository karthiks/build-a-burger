import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from './button';

const COMPONENT_UNDER_TEST = '<Button />';
const myMockCallback = jest.fn();

describe(COMPONENT_UNDER_TEST, () => {
    const SAMPLE_TEXT = 'Click Me To Buy';
    let button = null;

    beforeEach(()=>{
        button = <Button clicked={myMockCallback}>{SAMPLE_TEXT}</Button>;
    });

    it('should show "Normal" buttonType by default', () => {
        const wrapper = mount(button);
        expect(wrapper.props().buttonType).toBe('Normal');
    });

    it('should NOT show disable button by default', () => {
        const wrapper = mount(button);
        expect(wrapper.props().disabled).toBe(false);
    });

    it('should be disabled when it is set', () => {
        const wrapper = mount(<Button disabled clicked={myMockCallback} />);
        expect(wrapper.props().disabled).toBe(true);
    });

    it('should show its children', () => {
        const wrapper = shallow(button);
        expect(wrapper.children().text()).toBe(SAMPLE_TEXT);
    });
});
