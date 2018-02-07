import {SET_AUTH_TOKEN, SET_CURRENT_USER, CLEAR_MESSAGE, 
    AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR} from '../actions/auth';
import {DISPLAY_RESPONSE} from '../actions/users'; 

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null, 
    message: null, 
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } else if (action.type === DISPLAY_RESPONSE) {
        return Object.assign({}, state, {
            message: action.message
        }); 
    } else if (action.type === CLEAR_MESSAGE) {
        return Object.assign({}, state, {
            message: null
        })
    } else if (action.type === AUTH_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    } else if (action.type === AUTH_SUCCESS) {
        return Object.assign({}, state, {
            loading: false
        });
    } else if (action.type === AUTH_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    return state;
}
