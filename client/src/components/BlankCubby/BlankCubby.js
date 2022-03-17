import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import classes from './BlankCubby.module.css';

import Auth from "../../utils/auth";

const BlankCubby = () => {
  return (
    <main>
       <div className={classes.cubby} >
      <div className="flex-row justify-center">
      <Card className={classes.card}>
          {Auth.loggedIn() ? (
            <></>
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
      </div>
      </div>
    </main>
  );
};

export default BlankCubby;
