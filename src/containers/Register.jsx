import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link}  from 'react-router-dom'
import {registerAction} from '../actions';
import '../assets/styles/components/Register.scss';

const Register = ({register, history}) => {

	const [values, setValues] = useState({
		email: '',
		name: '',
		password: ''
	});

	const handleInput = event => setValues({...values, [event.target.name]: event.target.value});

	const handleSubmit = event => {
		event.preventDefault();
		register(values);
		history.push('/');
	}

	return ( 
		<section className="register">
			<section className="register__container">
				<h2>Sign up</h2>
				<form className="register__container--form" onSubmit={handleSubmit}>
					<input
					name="name"
					className="input-register"
					type="text"
					placeholder="Name"
					onChange={handleInput}
					/>
					<input
					name="email"
					className="input-register"
					type="text"
					placeholder="Email"
					onChange={handleInput}
					/>
					<input
					name="password"
					className="input-register"
					type="password"
					placeholder="Password"
					onChange={handleInput}
					/>
					<button className="button" type="submit">Sign up</button>
				</form>
				<Link to="/login" className="register__container--login">
						Login
				</Link>
			</section>
		</section>
	);
}

const mapDispatchToProps ={
	register: registerAction
}
 
export default connect(null, mapDispatchToProps)(Register);