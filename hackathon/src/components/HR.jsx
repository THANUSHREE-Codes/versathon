// import React, { useState } from "react";

// function Employer() {
//   const [hash, setHash] = useState("");

//   return (
//     <div>
//       <h2>Employer - Verify Certificate</h2>

//       <input
//         placeholder="Enter Certificate Hash"
//         onChange={(e) => setHash(e.target.value)}
//       />

//       <button>Verify (Connect to Blockchain)</button>
//     </div>
//   );
// }

// export default Employer;
import React, { useState } from "react";
import axios from "axios";

function HR() {
  const [hash, setHash] = useState("");
  const [verified, setVerified] = useState(null);

  const verifyBlockchain = async () => {
    const res = await axios.post("http://localhost:5000/verify-blockchain", { hash });
    setVerified(res.data.verified);
  };

  return (
    <div className="panel">
      <h2>HR / Employee Panel</h2>
      <input placeholder="Certificate Hash" value={hash} onChange={e => setHash(e.target.value)} />
      <button onClick={verifyBlockchain}>Verify</button>
      {verified !== null && <p>Blockchain Verification: {verified ? "✅ Verified" : "❌ Not Found"}</p>}
    </div>
  );
}

export default HR;
