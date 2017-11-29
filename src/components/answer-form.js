import React from 'react'; 
import {connect} from 'react-redux'; 
import { questionSubmit } from '../actions/users'; 

export class AnswerForm extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault(); 
        this.props.dispatch(questionSubmit(this.answerInput.value, this.props.currentUsername )); 
        console.log(this.props.currentUsername)
        console.log(this.props.question.correct_answer); 
        console.log(this.props.question.m);
        console.log(this.props.questions[0].m) 
        console.log(this.answerInput.value); 
        console.log(this.props.currentUser); 
    }





    render() {
        return (
            <div>
                <form onSubmit={e => this.handleFormSubmit(e)}>
                    <input ref={input => this.answerInput = input} 
                        placeholder="Your answer" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {  
        currentUsername: currentUser ? currentUser.username : null,
        question: currentUser ? currentUser.questions[0] : null, 
        questions: currentUser ? currentUser.questions : null
    }
}

export default connect(mapStateToProps)(AnswerForm); 