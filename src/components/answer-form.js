import React from 'react';
import { connect } from 'react-redux';
import { questionSubmit } from '../actions/users';
import { getCurrentUser, clearMessage } from '../actions/auth';

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
        this.setState({ submitted: false });
        this.props.dispatch(getCurrentUser(this.props.currentUsername))
    }

    render() {
        let nextButton;
        let form;
        let message = <p>efhfkefh{this.props.message}</p>
        if (this.state.submitted) {
            nextButton = <button className="button-next" onClick={() => this.handleNextButton()}>Next</button>;
        }
        else {
            form = 
            <form onSubmit={e => this.handleFormSubmit(e)}>
                <input className="input-answer" ref={input => this.answerInput = input}
                    placeholder="Your answer" />
                <button id="button-answer" type="submit">Submit</button>
            </form>;
        }

        return (
            <div>
                <p>{this.props.message}</p>
                {form}
                {nextButton}
            </div>
        )
    }
}

export const mapStateToProps = (state, props) => { 
    return {
        message: state.auth.message ? state.auth.message : null, 
        currentUsername: state.auth.currentUser ? state.auth.currentUser.username : null,
        question: state.auth.currentUser ? state.auth.currentUser.question : null
    }
}

export default connect(mapStateToProps)(AnswerForm); 