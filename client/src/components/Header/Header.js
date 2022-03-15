import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
      <header className={`${classes.header}`}>
      </header>
      <nav>
        <LinkContainer to={`/`}>
          <Nav.Link><p>Home</p></Nav.Link>
        </LinkContainer>

        {Auth.loggedIn() ? (
          <>
            <button className="btn btn-no-style" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <LinkContainer to={`/login`}>
              <Nav.Link><p>Login</p></Nav.Link>
            </LinkContainer>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
