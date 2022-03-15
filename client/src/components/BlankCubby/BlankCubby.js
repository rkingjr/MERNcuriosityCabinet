import React from "react";
//import classes from './BlankCard.module.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Auth from "../../utils/auth";

const BlankCubby = () => {
    return (
        <Container>
            <Card>
                {/* Add conditional to direct 1) new user to signin page, 2) registered user to login page, 3) already logged in to fileupload page */}
          {Auth.loggedIn() ? (
            <>              
            <p
                className="m-0"
                style={{ fontSize: "1.75rem", fontWeight: "700" }}
              >
                Upload something!
              </p>
            </>
          ) : (
            <>
              <p
                className="m-0"
                style={{ fontSize: "1.75rem", fontWeight: "700" }}
              >
                Login and upload!
              </p>
              <Link className="btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
            </>
          )}
            </Card>
            )
        </Container>
    )
}

export default BlankCubby
