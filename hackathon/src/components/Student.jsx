// import React from "react";

// function Student() {
//   return (
//     <div>
//       <h2>Student Dashboard</h2>
//       <p>Student receives certificate hash from university.</p>
//     </div>
//   );
// }

// export default Student;
import React, { useState } from "react";
import axios from "axios";

function Student() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [qr, setQr] = useState("");
  const [verified, setVerified] = useState(null);

  const checkCertificate = async () => {
    const res = await axios.post("http://localhost:5000/check-certificate", { name, course });
    setVerified(res.data.valid);
    setQr(res.data.qrData);
  };

  return (
    <div className="panel">
      <h2>Student Panel</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} />
      <button onClick={checkCertificate}>Check Certificate</button>
      {verified !== null && <div>
        <p>Status: {verified ? "Certificate Verified" : "Not Found"}</p>
        {qr && <img src={qr} alt="QR Code" />}
      </div>}
    </div>
  );
}

export default Student;
