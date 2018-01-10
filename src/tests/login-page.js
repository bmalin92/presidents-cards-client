import LoginPage from '../components/login-page'; 
import React from 'react'; 
import {shallow} from 'enzyme'; 

describe('<LoginPage />', () => {
    it('renders without crashing', () => {
        shallow(<LoginPage />); 
    }); 
}); 