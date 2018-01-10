import React from 'react'; 
import {App} from '../components/app'; 
import {shallow, mount} from 'enzyme'; 

describe('<App />', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    }); 
    it('has wrapper with class of app', () => {
        const wrapper = shallow(<App />); 
        expect(wrapper.hasClass('app')).toEqual(true); 
    }); 
}); 