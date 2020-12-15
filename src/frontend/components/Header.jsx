import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logoutAction} from '../actions';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({user, logout}) => {

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => logout({});
  
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser
              ? <img src={gravatar(user.email)} alt={user.email} />
              :<img src={userIcon} alt='profile' />
          }
          <p>Profile</p>
        </div>
        <ul>
          {
            hasUser 
              ? (
                <>
                <li><Link to='/'>{user.name}</Link></li>
                <li><Link to='/login' onClick={handleLogout}>Logout</Link></li>
               </>
              )
              : (
                <li><Link to='/login'>Sign in</Link></li>
              )
          }
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logout: logoutAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
