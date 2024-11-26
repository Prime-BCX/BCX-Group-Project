import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ConfirmYourDetailsPage.jsx';
import RegisterForm from '../RegisterForm/RegisterForm';

function ConfirmYourDetailsPage() {
    const history = useHistory();

    // Confirm Your Details Navigation
    const ConfirmYourDetails = () => {
        history.push('/ConfirmYourDetails');
    };

    // Trigger the Fetch

    const FETCH_DATA = 'FETCH_DATA';
    const SET_DATA = 'SET_DATA';
    const fetchData = () => ({
        type: FETCH_DATA,
    });

    const handleNavigate = () => {
        history.push('../PhotoUpload');
    };

    return (
        <div className="container">
            <h2>{heading}</h2>
            <h3>Does this all look correct?</h3>

            {/* Display the user information */}
            <ul>
                <li>Email: {email}</li>
                <li>First Name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>Timezone: {timezone}</li>
            </ul>


            <div className="grid-col grid-col_4">
                {/* Buttons below the details to confirm */}
                <div className="button-group">
                    <button className="btn btn_sizeSm" onClick={RegisterForm}>
                        Edit
                    </button>
                    <button className="btn btn_sizeSm" onClick={handleNavigate}>
                        Looks Good!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmYourDetailsPage;
