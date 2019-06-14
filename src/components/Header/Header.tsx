import React from 'react';
import logo from 'assets/logo.svg';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
