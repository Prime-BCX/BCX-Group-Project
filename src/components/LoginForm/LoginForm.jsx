import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Login.css';


function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);

  const login = (event) => {

    event.preventDefault();


    if (email && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          email: email,
          password: password,
        },

      })
      //
      console.log('user id at login page', user.id);
      //history.push('/PhotoUpload/${user.id}');
      history.push('/user');
      //
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login



  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Please Log In</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            required
            value={email}
            className='superSpecificInput'
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            className='superSpecificInput'
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Submit" />
       

      </div>
      <div className="create-profile-container">
    <button className="create-profile-button" onClick={() => history.push('/register')}>
      CREATE NEW PROFILE
    </button>
  </div>
    </form>
  );
}

export default LoginForm;

