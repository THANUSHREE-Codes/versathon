// // import React, { useState } from "react";
// // import axios from "axios";

// // function University() {
// //   const [studentId, setStudentId] = useState("");
// //   const [name, setName] = useState("");
// //   const [degree, setDegree] = useState("");
// //   const [message, setMessage] = useState("");

// //   const issueCertificate = async () => {
// //     try {
// //       const response = await axios.post("http://localhost:5000/generate-hash", {
// //         studentId,
// //         name,
// //         degree,
// //       });

// //       const hash = response.data.hash;

// //       // TODO: Call blockchain function here
// //       console.log("Generated Hash:", hash);

// //       setMessage("Certificate Issued Successfully!");
// //     } catch (error) {
// //       setMessage("Error issuing certificate");
// //     }
// //   };

// //   return (
// //     <div className="card">
// //       <h2>University</h2>

// //       <input
// //         placeholder="Student ID"
// //         onChange={(e) => setStudentId(e.target.value)}
// //       />
// //       <input
// //         placeholder="Student Name"
// //         onChange={(e) => setName(e.target.value)}
// //       />
// //       <input
// //         placeholder="Degree"
// //         onChange={(e) => setDegree(e.target.value)}
// //       />

// //       <button onClick={issueCertificate}>Issue Certificate</button>

// //       {message && <p className="success">{message}</p>}
// //     </div>
// //   );
// // }

// // export default University;
// // import React, { useState } from "react";
// // import axios from "axios";

// // function University() {
// //   const [studentName, setStudentName] = useState("");
// //   const [course, setCourse] = useState("");
// //   const [hash, setHash] = useState("");

// //   const generateHash = async () => {
// //     const response = await axios.post("http://localhost:5000/generate-hash", {
// //       studentName,
// //       course
// //     });

// //     setHash(response.data.hash);
// //   };

// //   return (
// //     <div>
// //       <h2>University - Issue Certificate</h2>

// //       <input
// //         placeholder="Student Name"
// //         onChange={(e) => setStudentName(e.target.value)}
// //       />

// //       <input
// //         placeholder="Course"
// //         onChange={(e) => setCourse(e.target.value)}
// //       />

// //       <button onClick={generateHash}>Generate Hash</button>

// //       {hash && <p>Generated Hash: {hash}</p>}
// //     </div>
// //   );
// // }

// // export default University;
// import React, { useState } from "react";
// import { getContract } from "../blockchain/contract";

// function University() {
//   const [hash, setHash] = useState("");

//   const issueCertificate = async () => {
//     const contract = await getContract();
//     const tx = await contract.issueCertificate(hash);
//     await tx.wait();
//     alert("Certificate Issued!");
//   };

//   return (
//     <div>
//       <h2>University Panel</h2>
//       <input
//         type="text"
//         placeholder="Enter Certificate Hash"
//         value={hash}
//         onChange={(e) => setHash(e.target.value)}
//       />
//       <button onClick={issueCertificate}>Issue</button>
//     </div>
//   );
// }

// export default University;
// import React, { useState } from "react";
// import axios from "axios";

// function University() {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [qr, setQr] = useState("");

//   const addCertificate = async () => {
//     const res = await axios.post("http://localhost:5000/add-certificate", {
//       name,
//       course,
//     });
//     setQr(res.data.qrData);
//     alert("Certificate added!");
//   };

//   return (
//     <div className="panel">
//       <h2>University Panel</h2>
//       <input placeholder="Student Name" value={name} onChange={e => setName(e.target.value)} />
//       <input placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} />
//       <button onClick={addCertificate}>Add Certificate</button>
//       {qr && <div>
//         <h3>QR Code:</h3>
//         <img src={qr} alt="QR Code" />
//       </div>}
//     </div>
//   );
// }

// export default University;
// import React, { useState } from "react";
// import axios from "axios";

// function University() {
//   const [name, setName] = useState("");
//   const [course, setCourse] = useState("");
//   const [email, setEmail] = useState(""); // New state
//   const [passingYear, setPassingYear] = useState(""); // New state
//   const [qr, setQr] = useState("");
//   const [hashCode, setHashCode] = useState(""); // State to store returned hash

//   const addCertificate = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/add-certificate", {
//         name,
//         course,
//         email,
//         passingYear,
//       });

//       // Assuming your backend returns { qrData: "...", hash: "..." }
//       setQr(res.data.qrData);
//       setHashCode(res.data.hash); 
//       alert("Certificate added successfully!");
//     } catch (error) {
//       console.error("Error adding certificate:", error);
//       alert("Failed to add certificate.");
//     }
//   };

//   return (
//     <div className="panel">
//       <h2>University Panel</h2>
//       <div className="input-group">
//         <input 
//           placeholder="Student Name" 
//           value={name} 
//           onChange={e => setName(e.target.value)} 
//         />
//         <input 
//           placeholder="Student Email" 
//           type="email"
//           value={email} 
//           onChange={e => setEmail(e.target.value)} 
//         />
//         <input 
//           placeholder="Course" 
//           value={course} 
//           onChange={e => setCourse(e.target.value)} 
//         />
//         <input 
//           placeholder="Passing Year" 
//           type="number"
//           value={passingYear} 
//           onChange={e => setPassingYear(e.target.value)} 
//         />
//       </div>
      
//       <button onClick={addCertificate}>Add Certificate</button>

//       {qr && (
//         <div className="result">
//           <h3>Certificate Details:</h3>
//           <p><strong>Hash Code:</strong> {hashCode}</p>
//           <img src={qr} alt="QR Code" style={{ marginTop: "10px" }} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default University;
// import React, { useState } from "react";
// import { ethers } from "ethers";
// import axios from "axios";

// function University() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [course, setCourse] = useState("");
//   const [passingYear, setPassingYear] = useState("");
//   const [qr, setQr] = useState("");
//   const [account, setAccount] = useState(null);

//   // 1. Connect to MetaMask
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//       setAccount(accounts[0]);
//     } else {
//       alert("Please install MetaMask!");
//     }
//   };

//   // 2. Generate Hash and Upload
//   const addCertificate = async () => {
//     if (!account) return alert("Connect wallet first!");

//     // Generate a simple hash of the student data
//     const dataString = `${name}-${email}-${course}-${passingYear}`;
//     const hashCode = ethers.utils.id(dataString); // This creates a Keccak256 hash

//     try {
//       // Step A: Store in your database via Backend
//       const res = await axios.post("http://localhost:5000/add-certificate", {
//         name, email, course, passingYear, hashCode
//       });

//       // Step B: Send hash to Ethereum (Simplified Example)
//       const provider = new ethers.providers.Web3Provider(window.ethereum);
//       const signer = provider.getSigner();
      
//       /* NOTE: To actually store on-chain, you need a deployed Smart Contract.
//          Example call:
//          const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
//          await contract.addCertificate(hashCode); 
//       */

//       setQr(res.data.qrData);
//       alert(`Certificate Hashed: ${hashCode}\nStored on Blockchain!`);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div className="panel" style={{ padding: "20px" }}>
//       <h2>University Blockchain Panel</h2>
//       <button onClick={connectWallet}>
//         {account ? `Connected: ${account.substring(0,6)}...` : "Connect MetaMask"}
//       </button>

//       <hr />
      
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
//         <input placeholder="Student Name" onChange={e => setName(e.target.value)} />
//         <input placeholder="Student Email" onChange={e => setEmail(e.target.value)} />
//         <input placeholder="Course" onChange={e => setCourse(e.target.value)} />
//         <input placeholder="Passing Year" type="number" onChange={e => setPassingYear(e.target.value)} />
//         <button onClick={addCertificate} disabled={!account}>Generate & Upload</button>
//       </div>

//       {qr && (
//         <div style={{ marginTop: "20px" }}>
//           <h3>Verified QR Code:</h3>
//           <img src={qr} alt="QR Code" />
//         </div>
//       )}
//     </div>
//   );
// }

// export default University;
import React, { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";

// Replace these after deploying your contract
const CONTRACT_ADDRESS = "0x25dc47C2E895b6ddbA61A9d37f5BAf9043d4ed77";
const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "issueCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "certificates",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "university",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "verifyCertificate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


function University() {
  const [formData, setFormData] = useState({ name: "", email: "", course: "", year: "" });
  const [account, setAccount] = useState(null);
  const [qr, setQr] = useState("");
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateAndUpload = async () => {
    if (!account) return alert("Connect MetaMask first!");
    setLoading(true);

    try {
      // 1. Generate Local Hash (Keccak256)
      const dataString = `${formData.name}-${formData.email}-${formData.course}-${formData.year}`;
      const hashCode = ethers.utils.solidityKeccak256(["string"], [dataString]);

      // 2. Interact with Blockchain via MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // This triggers the MetaMask popup to sign the transaction
      const tx = await contract.addCertificate(hashCode);
      await tx.wait(); // Wait for the block to be mined

      // 3. Update Backend/Database and get QR
      const res = await axios.post("http://localhost:5000/add-certificate", {
        ...formData,
        hashCode: hashCode
      });

      setQr(res.data.qrData);
      alert("Certificate anchored to Blockchain and QR Generated!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed or rejected.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel" style={{ padding: "40px", textAlign: "center" }}>
      <h2>University Blockchain Portal</h2>
      
      {!account ? (
        <button onClick={connectWallet}>Connect MetaMask</button>
      ) : (
        <p>Wallet: {account.substring(0, 6)}...{account.slice(-4)}</p>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
        <input name="name" placeholder="Student Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="course" placeholder="Course" onChange={handleChange} />
        <input name="year" placeholder="Passing Year" type="number" onChange={handleChange} />
        
        <button onClick={generateAndUpload} disabled={loading}>
          {loading ? "Processing Transaction..." : "Issue Blockchain Certificate"}
        </button>
      </div>

      {qr && (
        <div style={{ marginTop: "30px" }}>
          <h3>Verified QR Code</h3>
          <img src={qr} alt="QR Code" />
          <p>This QR contains the immutable blockchain hash.</p>
        </div>
      )}
    </div>
  );
}

export default University;