/* @flow */
import type { Component } from '../types';
import logo from '../assets/logo.svg';
import { PageWrapper } from './common';

const NotFound = (): Component => {
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
          NotFound
        </a>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
