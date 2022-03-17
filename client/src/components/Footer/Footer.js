import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from './Footer.module.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer style={{backgroundColor: "#FFDDA1", marginTop: "40px", paddingTop: "30px"}}>
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4 className={classes.text}>
          &copy; {new Date().getFullYear()} -{" "}
          <a
            href="https://github.com/rkingjr/MERNcuriosityCabinet"
            target="_blank"
            rel="noreferrer"
          >
           Curiosity Cabinet
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
