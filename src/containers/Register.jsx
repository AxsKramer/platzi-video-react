import React, { Fragment } from 'react';
import {Link}  from 'react-router-dom'
import Header from '../components/Header';
import '../assets/styles/components/Register.scss';

const Register = () => {
    return ( 
        <Fragment>
            <section className="register">
                <section className="register__container">
                <h2>Sign up</h2>
                <form 
                    className="register__container--form" 
                    // onSubmit={handleSubmit}
                >
                    <input
                    name="name"
                    className="input-register"
                    type="text"
                    placeholder="Name"
                    // onChange={updateInput}
                    />
                    <input
                    name="email"
                    className="input-register"
                    type="text"
                    placeholder="Email"
                    // onChange={updateInput}
                    />
                    <input
                    name="password"
                    className="input-register"
                    type="password"
                    placeholder="Password"
                    // onChange={updateInput}
                    />
                    <button className="button" type="submit">Sign up</button>
                </form>
                <Link to="/login" className="register__container--login">
                    Login
                </Link>
                </section>
            </section>
        </Fragment>
     );
}
 
export default Register;