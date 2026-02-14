import { ethers } from "ethers";
import Certificate from "../../abi/Certificate.json";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("Install MetaMask");
    return;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  return new ethers.Contract(contractAddress, Certificate.abi, signer);
};