import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProgressLanding() {
  return (
    <div className="ProgressLanding">
      <div className="container">
        <h2>
          In Progress, please return <Link to="/">home</Link>.
        </h2>
      </div>
    </div>
  );
}


export default ProgressLanding;