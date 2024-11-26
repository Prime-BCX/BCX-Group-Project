import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ConfirmYourDetailsPage.jsx';
import RegisterForm from '../RegisterForm/RegisterForm';
import { useSelector } from 'react-redux';


function ConfirmYourDetailsPage() {
    const history = useHistory();
    const tempUser = useSelector(state => state.userConfirmReducer)

    const handleNavigate = (event) => {
        registerUser(event)
        history.push('../PhotoUpload');
    };

    // Handle form submission
    const registerUser = (event) => {
        event.preventDefault(); // Prevent form submission from causing page reload or redirect

        // Only dispatch the registration action if all required fields are filled
        if (tempUser.email && tempUser.firstName && tempUser.lastName && tempUser.password && tempUser.timezone) {
            dispatch({
                type: 'REGISTER',
                payload: {
                    email: tempUser.email,
                    first_name: tempUser.firstName,
                    last_name: tempUser.lastName,
                    password: tempUser.password,
                    timezone: tempUser.timezone,
                },
            });
        } else {
            console.log("Form is not complete");
        }
    };

    return (
        <div className="container">
            <h2>Confirm Your Details</h2>
            <h3>Does this all look correct?</h3>

            {/* Display the user information */}
            <ul>
                <li>Email: {tempUser.email}</li>
                <li>First Name: {tempUser.firstName}</li>
                <li>Last Name: {tempUser.lastName}</li>
                <li>Timezone: {tempUser.timezone}</li>
            </ul>


            <div className="grid-col grid-col_4">

                <div className="button-group">
                    <button className="btn btn_sizeSm" 
                    onClick={RegisterForm}>
                        Edit
                    </button>
                    <button className="btn btn_sizeSm" 
                    onClick={handleNavigate}>
                        Looks Good!
                    </button>

                </div>
            </div>
        </div>
    );
}

export default ConfirmYourDetailsPage;
