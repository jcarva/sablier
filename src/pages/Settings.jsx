/* @flow */
import { type Component } from '../types';
import logo from '../assets/logo.svg';
import { PageWrapper } from './common';

const Settings = (): Component => {
  return (
    <PageWrapper>
      <div className='page-content'>
        <img src={logo} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://github.com/jcarva/sablier'
          target='_blank'
          rel='noopener noreferrer'
        >
          Settings
        </a>
      </div>
    </PageWrapper>
  );
};

export default Settings;
