import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUser, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

export class Footer extends React.Component {
    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <p className="right cursor" onClick={() => this.logOut()}>Log out</p>
            );
        }
        return (
            <div>
                {logOutButton}
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser ? state.auth.currentUser.username : null
});

export default connect(mapStateToProps)(Footer);
