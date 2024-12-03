import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ConfirmYourDetailsPage.css';
import { useSelector } from 'react-redux';
import NavigationButtons from '../NavigationButtons/NavigationButtons'; // Adjust the path based on your structure


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
                    firstName: tempUser.firstName,
                    lastName: tempUser.lastName,
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
            <p></p>
            <p> </p>
            <h3>Confirm Your Details</h3>
            <h3>Does this all look correct?</h3>
            {/* Display the user information */}

            <p>Email: {tempUser.email}</p>
            <p>First Name: {tempUser.firstName}</p>
            <p>Last Name: {tempUser.lastName}</p>
            <p>Timezone: {tempUser.timezone}</p>



            <div className="button-container">
                <NavigationButtons />
            </div>
          

        </div>
    );
}

export default ConfirmYourDetailsPage;
