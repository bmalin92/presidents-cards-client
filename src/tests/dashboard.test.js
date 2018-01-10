import {Dashboard} from '../components/dashboard'; 
import React from 'react'; 
import {shallow} from 'enzyme'; 

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        shallow(<Dashboard />); 
    }); 
}); 