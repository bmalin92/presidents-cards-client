import React from 'react'; 
import {AnswerForm} from '../components/answer-form'; 
import {shallow, mount} from 'enzyme'; 

describe('<AnswerForm />', () => {
    it('renders without crashing', () => {
        shallow(<AnswerForm />); 
    });
    it('displays a form when state.submitted is false', () => {
        const wrapper = shallow(<AnswerForm submitted={false}/>); 
        expect(wrapper.contains(<button id="button-answer" type="submit">Submit</button>)).toEqual(true)
    });  
    it('displays the message passed to it by props', () => {
        const wrapper = shallow(<AnswerForm message={"test"} submitted={true}/>); 
        expect(wrapper.contains('test')).toEqual(true) 
    }); 
    it('dispatches a function when the form is sumitted', () => {
        const spy = jest.fn(); 
        const wrapper = mount(<AnswerForm dispatch={spy}/> );
        wrapper.instance(); 
        expect(wrapper.state('submitted')).toEqual(false);
        const button = wrapper.find('#button-answer');
        button.simulate('click') 
        expect(wrapper.state('submitted')).toEqual(true); 
    }); 
}); 