import React from 'react'; 
import {RegistrationPage} from '../components/registration-page'; 
import {shallow} from 'enzyme'; 

describe('<RegistrationPage />', () => {
    it('renders without crashing', () => {
        shallow(<RegistrationPage />); 
    }); 
    it('has container div with class of home', () => {
        const wrapper = shallow(<RegistrationPage />); 
        expect(wrapper.hasClass('home')).toEqual(true); 
    }); 
    it('contains links to the main page', () => {
        const wrapper = shallow(<RegistrationPage />); 
        expect(wrapper.containsMatchingElement(<h2>Register</h2>)).toEqual(true);  
    });
}); 