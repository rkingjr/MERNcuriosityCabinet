import classes from './Header.module.css';
import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
       <Link className="text-dark" to="/">
    <header className={classes.header} >
      <div className={classes.banner}></div>
         </header>
          </Link>
        <nav style={{justifyContent: 'left', backgroundColor: '#5e877f', marginBottom: '40px'}}>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-md btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-md btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-md btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </nav>
        </div>
  );
};

export default Header;
