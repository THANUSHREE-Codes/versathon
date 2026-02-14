import React, { useState } from "react";

function Employer() {
  const [hash, setHash] = useState("");

  return (
    <div>
      <h2>Employer - Verify Certificate</h2>

      <input
        placeholder="Enter Certificate Hash"
        onChange={(e) => setHash(e.target.value)}
      />

      <button>Verify (Connect to Blockchain)</button>
    </div>
  );
}

export default Employer;