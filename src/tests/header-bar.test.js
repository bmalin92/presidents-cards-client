import React from 'react'; 
import {shallow} from 'enzyme'; 
import HeaderBar from '../components/header-bar'; 

describe('<HeaderBar />', () => {
    it('renders without crashing', () => {
        shallow(<HeaderBar />)
    }); 
    it('has a class of header-bar applied to the container div', () => {
        const wrapper = shallow(<HeaderBar />); 
        expect(wrapper.hasClass('header-bar')).toEqual(true); 
    }); 
}); 