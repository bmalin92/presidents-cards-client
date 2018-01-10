import React from 'react'; 
import {shallow, mount} from 'enzyme'; 
import {Footer} from '../components/footer'; 

describe('<Footer />', () => {
    it('renders without crashing', () => {
        shallow(<Footer />); 
    }); 
    it('contains logout button if logged in', () => {
        const wrapper = shallow(<Footer loggedIn={true} />); 
        expect(wrapper.contains('Log out')).toEqual(true)
    }); 
    it('contains logout button if not logged in', () => {
        const wrapper = shallow(<Footer loggedIn={false} />); 
        expect(wrapper.contains('Log out')).toEqual(false)
    });
    it('fires dispatch when the logout button is clicked', () => {
        const spy = jest.fn()
        const wrapper = mount(<Footer dispatch={spy} loggedIn={true} />); 
        wrapper.instance(); 
        const logoutButton = wrapper.find('.right');
        logoutButton.simulate('click'); 
        expect(spy).toHaveBeenCalled();
    });  
}); 







