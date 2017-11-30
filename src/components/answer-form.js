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
        let submitButton;
        let nextButton;
        let form;
        if (this.state.submitted) {
            nextButton = <button onClick={() => this.handleNextButton()}>Next</button>;
        }
        else {
            form = 
            <form onSubmit={e => this.handleFormSubmit(e)}>
                <input ref={input => this.answerInput = input}
                    placeholder="Your answer" />
                <button type="submit">Submit</button>
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
        currentUsername: currentUser ? currentUser.username : null,
        question: currentUser ? currentUser.question : null
    }
}

export default connect(mapStateToProps)(AnswerForm); 