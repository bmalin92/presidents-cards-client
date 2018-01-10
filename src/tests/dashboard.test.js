import {Dashboard} from '../components/dashboard'; 
import React from 'react'; 
import {Provider} from 'react-redux'; 
import {shallow, mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Redirect} from 'react-router-dom'; 

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        shallow(<Dashboard />); 
    }); 
    it('has wrapper with .dashboard class', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Dashboard question={'test'} dispatch={spy} loggedIn={true}/>); 
        expect(wrapper.hasClass('dashboard')).toEqual(true); 
    }); 
    it('if logged in, on componentDidMount it dispatches fetchProtectedData', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Dashboard question={'test'} dispatch={spy} loggedIn={true}/>); 
        expect(spy).toHaveBeenCalled();  
    });
    it('if not logged in, on componentDidMount it dispatches fetchProtectedData', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Dashboard question={'test'} dispatch={spy} loggedIn={false}/>); 
        expect(spy).not.toHaveBeenCalled()
    });
    it('if not logged in, renders Redirect link', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Dashboard question={'test'} dispatch={spy} loggedIn={false}/>); 
        expect(wrapper.contains(<Redirect to="/" />)).toEqual(true)
    });
    it('if logged in, on componentDidMount it dispatches fetchProtectedData', () => {
        const spy = jest.fn(); 
        const wrapper = shallow(<Dashboard question={'test'} dispatch={spy} loggedIn={true}/>); 
        expect(wrapper.contains(<h4>Question: test</h4>)).toEqual(true);  
    });
}); 