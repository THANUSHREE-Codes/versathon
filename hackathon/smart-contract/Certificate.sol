// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Certificate {
    address public university;
    mapping(string => bool) public certificates;

    constructor() {
        university = msg.sender;
    }

    function issueCertificate(string memory _hash) public {
        require(msg.sender == university, "Only university can issue");
        certificates[_hash] = true;
    }

    function verifyCertificate(string memory _hash) public view returns (bool) {
        return certificates[_hash];
    }
}
