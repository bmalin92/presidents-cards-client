import React from 'react'; 
import {Home} from '../components/home'; 
import {shallow} from 'enzyme'; 

describe(<Home />, () => {
    it('renders without crashing', () => {
        shallow(<Home />); 
    });
    it('has home style applied to wrapper', () => {
        const wrapper = shallow(<Home />); 
        expect(wrapper.hasClass('home')).toEqual(true); 
    }); 
    it('contains image', () => {
        const wrapper = shallow(<Home />); 
        expect(wrapper.contains(<img className="picture" src="./images/home.jpg" />)).toEqual(true);  
    });
}); 