import React from "react";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <section className="welcome-area">
      <div className="container">
        <div className="row">
          <center>
            <div className="hero-text">
              <h1>Thank you for your e-mail.</h1>
              <h3>We Will contact you very soon.</h3>
              <Link className="back-home" to={"/react-templates/edumim"}>
                Back To Home
              </Link>
            </div>
          </center>
        </div>
      </div>
    </section>
  );
};

export default Thanks;
