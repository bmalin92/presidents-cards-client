import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getCurrentUser} from '../actions/auth'; 
import {fetchProtectedData} from '../actions/protected-data';
import AnswerForm from './answer-form'; 


export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }
        this.props.dispatch(fetchProtectedData());
    }

    handleNextButton() {
        console.log('username:', this.props.username);
        this.props.dispatch(getCurrentUser(this.props.username))
    }

    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                    Username: {this.props.username}
                </div>
                <div className="dashboard-name">Name: {this.props.name}</div>
                <div className="dashboard-question">
                    Question: {this.props.question}
                    <AnswerForm />
                    <button onClick={() => this.handleNextButton()}>Next</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        username: currentUser ? state.auth.currentUser.username : '',
        name: currentUser
            ? `${currentUser.firstName} ${currentUser.lastName}`
            : '',
        question: currentUser ? currentUser.question : null, 
    };
};

export default connect(mapStateToProps)(Dashboard);
