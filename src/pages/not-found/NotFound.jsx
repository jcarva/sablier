/* @flow */
import { type Component } from '../../types';
import logo from '../../assets/logo.svg';

const NotFound = (): Component => {
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
          404
        </a>
      </header>
    </div>
  );
};

export default NotFound;
