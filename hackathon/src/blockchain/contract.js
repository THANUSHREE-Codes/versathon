// // import { ethers } from "ethers";
// // import Certificate from "../../abi/Certificate.json";

// // const contractAddress = "0x25dc47C2E895b6ddbA61A9d37f5BAf9043d4ed77";

// // export const getContract = async () => {
// //   if (!window.ethereum) {
// //     alert("Install MetaMask");
// //     return;
// //   }

// //   await window.ethereum.request({ method: "eth_requestAccounts" });

// //   const provider = new ethers.BrowserProvider(window.ethereum);
// //   const signer = await provider.getSigner();

// //   return new ethers.Contract(contractAddress, Certificate.abi, signer);
// // };





// import { ethers } from "ethers";

// const contractAddress = "0x25dc47C2E895b6ddbA61A9d37f5BAf9043d4ed77";

//const contractABI = 
// export const getContract = async () => {
//   if (!window.ethereum) {
//     alert("Install MetaMask");
//     return null;
//   }

//   await window.ethereum.request({ method: "eth_requestAccounts" });

//   const provider = new ethers.BrowserProvider(window.ethereum);
//   const signer = await provider.getSigner();

//   return new ethers.Contract(contractAddress, contractABI, signer);
// };






import { ethers } from "ethers";

// Replace with your deployed contract address
const contractAddress = "0x25dc47C2E895b6ddbA61A9d37f5BAf9043d4ed77";
const contractABI =[
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


export const getContract = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return null;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new ethers.Contract(contractAddress, contractABI, signer);
};
