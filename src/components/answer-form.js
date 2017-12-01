import React from 'react';
import { connect } from 'react-redux';
import { questionSubmit } from '../actions/users';
import { getCurrentUser } from '../actions/auth';

export class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false
        }
    }
    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        this.props.dispatch(questionSubmit(this.answerInput.value, this.props.currentUsername));
        this.answerInput.value = '';
    }

    handleNextButton() {
        console.log('username:', this.props.username);
        this.setState({ submitted: false });
        this.props.dispatch(getCurrentUser(this.props.currentUsername))
    }

    render() {
        let nextButton;
        let form;
        if (this.state.submitted) {
            nextButton = <button className="button-next" onClick={() => this.handleNextButton()}>Next</button>;
        }
        else {
            form = 
            <form onSubmit={e => this.handleFormSubmit(e)}>
                <input ref={input => this.answerInput = input}
                    placeholder="Your answer" />
                <button id="button-answer" type="submit">Submit</button>
            </form>;
        }


        return (
            <div>
                {form}
                {nextButton}
            </div>
        )
    }
}



const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        // message: "Hello", 
        currentUsername: currentUser ? currentUser.username : null,
        question: currentUser ? currentUser.question : null
    }
}

// const mapStateToProps = (state, props) => ({ 
//     message: state.message, 
//     currentUsername: state.currentUser ? state.currentUser.username : null,
//     question: state.currentUser ? state.currentUser.question : null
// })

export default connect(mapStateToProps)(AnswerForm); 