// import React from "react";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Credential Verification System</h1>

//       <div style={{ marginTop: "40px" }}>
//         <Link to="/university">
//           <button>University</button>
//         </Link>

//         <Link to="/student">
//           <button>Student</button>
//         </Link>

//         <Link to="/employer">
//           <button>Employer</button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
import React, { useState } from "react";
import University from "./University";
import Student from "./Student";
import HR from "./HR";

function Dashboard() {
  const [role, setRole] = useState("");

  if (!role) {
    return (
      <div className="role-select">
        <h1>Choose Role</h1>
        <button onClick={() => setRole("university")}>University</button>
        <button onClick={() => setRole("student")}>Student</button>
        <button onClick={() => setRole("hr")}>HR / Employee</button>
      </div>
    );
  }

  return (
    <div>
      {role === "university" && <University />}
      {role === "student" && <Student />}
      {role === "hr" && <HR />}
    </div>
  );
}

export default Dashboard;
