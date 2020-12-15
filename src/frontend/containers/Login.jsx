import React, {Fragment,useState} from 'react';
import {connect} from 'react-redux';
import {Link}   from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon  from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss';
import {loginAction} from'../actions';

const Login = ({login, history}) => {

  const [values, setValues] = useState({
    email: ''
  });

  const handleInput = event => setValues({...values,[ event.target.name]:  event.target.value});
  
  const handleSubmit = event => {
    event.preventDefault();
    login(values);
    history.push('/');
  }

  return (
    <Fragment>
      <section className="login">
        <section className="login__container">
          <h3>LOGIN</h3>
          <form className="login__container--form" onSubmit={handleSubmit} >
            <input
              name="email"
              className="input-login"
              type="text"
              placeholder="Email"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input-login"
              type="password"
              placeholder="Password"
              onChange={handleInput}
            />
            <button className="button" type="submit">Log in</button>
            <div className="login__container--remember-me">
              <label htmlFor="first_checkbox">
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Remember me
              </label>
              <a href="/">I forgot my password</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} alt="Google" />
              {' '}
              Login with Google
            </div>
            <div>
              <img src={twitterIcon} alt="Twitter" />
              {' '}
              Login with Twitter
            </div>
          </section>
          <p className="login__container--register">
            You do not have an account
            {' '}
            <Link to="/register">
              Sign up here
            </Link>
          </p>
        </section>
      </section>
    </Fragment>
  );
}

const mapDispatchToProps =  {
  login: loginAction
}

export default connect(null, mapDispatchToProps)(Login);