/* @flow */
import { PageWrapper } from './common';
import { type Component } from '../types';
import logo from '../assets/logo.svg';

const Tasks = (): Component => {
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
          Tasks
        </a>
      </div>
    </PageWrapper>
  );
};

export default Tasks;
