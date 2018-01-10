import LoginForm from '../components/login-form'; 
import React from 'react'; 
import {shallow} from 'enzyme'; 

describe('<LoginForm />', () => {
    it('renders without crashing', () => {
        shallow(<LoginForm />); 
    }); 
}); 