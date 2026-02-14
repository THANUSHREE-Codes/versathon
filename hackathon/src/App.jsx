// import React from "react";
// import "./App.css";
// import University from "./components/University";
// import Employer from "./components/Employer";
// import Student from "./components/Student";

// function App() {
//   return (
//     <div className="container">
//       <h1 className="title">Blockchain Credential Verification</h1>

//       <div className="card-container">
//         <University />
//         <Employer />
//         <Student />
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import University from "./components/University";
import Student from "./components/Student";
import Employer from "./components/Employer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/university" element={<University />} />
        <Route path="/student" element={<Student />} />
        <Route path="/employer" element={<Employer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;