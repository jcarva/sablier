/* @flow */
import { type Component } from '../../types';
import logo from '../../assets/logo.svg';

const Login = (): Component => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://github.com/jcarva/sablier'
          target='_blank'
          rel='noopener noreferrer'
        >
          Login
        </a>
      </header>
    </div>
  );
};

export default Login;
