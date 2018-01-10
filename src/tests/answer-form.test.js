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
}); 