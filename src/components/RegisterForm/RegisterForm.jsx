import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [timezone, setTimezone] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  // Handle form submission
  const registerUser = (event) => {
    event.preventDefault(); // Prevent form submission from causing page reload or redirect

    // Only dispatch the registration action if all required fields are filled
    if (email && firstName && lastName && password && timezone) {
      dispatch({
        type: 'REGISTER',
        payload: {
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: password,
          timezone: timezone,
        },
      });
    } else {
      console.log("Form is not complete");
    }
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Handle timezone selection from dropdown
  const handleTimezoneSelect = (timezone) => {
    setTimezone(timezone);
    setDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="container">
    <h2 className="heading">Register User</h2>
    <form className="formPanel" onSubmit={registerUser}>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div className="formGroup">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          required
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>

      <div className="formGroup">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          required
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>

      <div className="formGroup">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="formGroup">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="formhGroup">
        <label htmlFor="timezone">Timezone:</label>
        <div className="dropdown">
          <button 
            type="button" 
            onClick={toggleDropdown} 
            className="dropbtn"
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : "false"}
          >
            {timezone || 'Select Timezone'}
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTimezoneSelect('CST'); }}>CST</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTimezoneSelect('EST'); }}>EST</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTimezoneSelect('PST'); }}>PST</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); handleTimezoneSelect('MST'); }}>MST</a></li>
              </ul>
            </div>
            
          )}
        </div>
      </div>

      <div>
        <input 
          className="butn" 
          type="submit" 
          name="submit" 
          value="Register" 
        />
      </div>
    </form>
    </div>

  )};

export default RegisterForm;
