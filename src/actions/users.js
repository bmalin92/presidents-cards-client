import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};


export const DISPLAY_RESPONSE = "DISPLAY_RESPONSE"; 
export const displayResponse = message => {
    return {
        type: DISPLAY_RESPONSE, 
        message: message.message
    }
}

export const questionSubmit = (answerInput, username) => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ answerInput, username })
    })
        .then(res => res.json())
        .then(res => {
            dispatch(displayResponse(res))
        })
}

