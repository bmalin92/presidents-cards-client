import React from 'react'; 
import {connect} from 'react-redux'; 
import { questionSubmit } from '../actions/users'; 

export class AnswerForm extends React.Component {
    handleFormSubmit(event) {
        event.preventDefault(); 
        this.props.dispatch(questionSubmit(this.answerInput.value, this.props.currentUsername ));  
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
        question: currentUser ? currentUser.question : null
    }
}

export default connect(mapStateToProps)(AnswerForm); 