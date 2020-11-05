import React, {Fragment} from 'react';
import {Link}   from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon  from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss';
import Header from '../components/Header';

const Login = props => {
  
    return (
      <Fragment>
        <section className="login">
          <section className="login__container">
            <h3>LOGIN</h3>
            <form className="login__container--form"
                //  onSubmit={handleSubmit)
            >
              <input
                name="email"
                className="input-login"
                type="text"
                placeholder="Email"
                // onChange={updateInput}
              />
              <input
                name="password"
                className="input-login"
                type="password"
                placeholder="Password"
                // onChange={updateInput}
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

export default Login;