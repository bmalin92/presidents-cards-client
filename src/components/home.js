import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

export function Home(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="home">
            <img className="picture" src="./images/home.jpg" />
            <p className="center" >POTUS Facts is a spaced-repitition application for testing your
                presidential trivia knowledge! Think you are a US history whiz? 
                Sign up today and find out!
            </p>
            <div className="center button-container">
                <Link className="button" to="/register">Register</Link>
                <Link id="button-login" className="button" to="/login">Login</Link>
            </div>
        </div>
    );
}

export const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Home);
