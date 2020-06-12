import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Profile from './profile';

Enzyme.configure({adapter: new Adapter()});

describe('Profile',()=>{

    it('name should be "Random Name"',()=>{
        const wrapper = shallow(<Profile />);
        expect(wrapper.instance().state.name).toBe("Random Name");
    });

});