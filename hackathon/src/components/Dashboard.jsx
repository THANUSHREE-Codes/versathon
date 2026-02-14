import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Credential Verification System</h1>

      <div style={{ marginTop: "40px" }}>
        <Link to="/university">
          <button>University</button>
        </Link>

        <Link to="/student">
          <button>Student</button>
        </Link>

        <Link to="/employer">
          <button>Employer</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;