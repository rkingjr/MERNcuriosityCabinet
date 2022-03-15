import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const BlankCubby = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3 text-center">
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
        </div>
      </div>
    </main>
  );
};

export default BlankCubby;
