import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {location.pathname !== "/" && (
          <button className="btn btn-dark mb-3" onClick={() => navigate(-1)}>
            &larr; Go Back
          </button>
        )}
        <h4>&copy; {new Date().getFullYear()} - Curiosity Cabinet</h4>
        <h4>
          &copy; {new Date().getFullYear()} -{" "}
          <a
            href="https://github.com/rkingjr/MERNcuriosityCabinet"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
