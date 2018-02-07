import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import { PulseLoader } from 'react-spinners'; 

import LoginForm from './login-form';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <h2>Login</h2>
            <LoginForm />
            <PulseLoader color={'#fff'} loading={props.loading} className="loading-graphic" />
            <br />
            <Link className="block link" to="/register">Register</Link>
            <Link className="block link" to="/">Main</Link>
        </div>
    );
}

export const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null, 
    loading: state.auth.loading
});

export default connect(mapStateToProps)(LandingPage);
