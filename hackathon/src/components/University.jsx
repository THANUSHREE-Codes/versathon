// import React, { useState } from "react";
// import axios from "axios";

// function University() {
//   const [studentId, setStudentId] = useState("");
//   const [name, setName] = useState("");
//   const [degree, setDegree] = useState("");
//   const [message, setMessage] = useState("");

//   const issueCertificate = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/generate-hash", {
//         studentId,
//         name,
//         degree,
//       });

//       const hash = response.data.hash;

//       // TODO: Call blockchain function here
//       console.log("Generated Hash:", hash);

//       setMessage("Certificate Issued Successfully!");
//     } catch (error) {
//       setMessage("Error issuing certificate");
//     }
//   };

//   return (
//     <div className="card">
//       <h2>University</h2>

//       <input
//         placeholder="Student ID"
//         onChange={(e) => setStudentId(e.target.value)}
//       />
//       <input
//         placeholder="Student Name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         placeholder="Degree"
//         onChange={(e) => setDegree(e.target.value)}
//       />

//       <button onClick={issueCertificate}>Issue Certificate</button>

//       {message && <p className="success">{message}</p>}
//     </div>
//   );
// }

// export default University;
import React, { useState } from "react";
import axios from "axios";

function University() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    const response = await axios.post("http://localhost:5000/generate-hash", {
      studentName,
      course
    });

    setHash(response.data.hash);
  };

  return (
    <div>
      <h2>University - Issue Certificate</h2>

      <input
        placeholder="Student Name"
        onChange={(e) => setStudentName(e.target.value)}
      />

      <input
        placeholder="Course"
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={generateHash}>Generate Hash</button>

      {hash && <p>Generated Hash: {hash}</p>}
    </div>
  );
}

export default University;