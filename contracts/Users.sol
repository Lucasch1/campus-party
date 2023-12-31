// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Users is Ownable {
    
    using Counters for Counters.Counter;
    using ECDSA for bytes32;

    Counters.Counter private _userIdCounter;

    struct User {
        string name;
        string email; 
        bytes32 passwordHash;
    }

    mapping(uint256 => User) private _users;
    mapping(string => uint256) private _emailToUserId;

    function registerUser(string memory name, string memory email, bytes32 passwordHash) public onlyOwner {
        uint256 userId = _userIdCounter.current();
        _userIdCounter.increment();

        _users[userId] = User(name, email, passwordHash);
        _emailToUserId[email] = userId;
    }

    function getUserByEmail(string memory email) public view onlyOwner returns (string memory) {
        uint256 userId = _emailToUserId[email];
        if (userId == 0 || userId > _userIdCounter.current()) {
            return "User does not exist";
        } else {
            return "User exists";
        }
    }

    function loginUser(string memory email, bytes32 passwordHash) public view onlyOwner returns (string memory) {
    uint256 userId = _emailToUserId[email];
    if (userId == 0 || userId > _userIdCounter.current()) {
        return "Email not found";
    } else {
        User memory user = _users[userId];
        if (user.passwordHash == passwordHash) {
            return "Correct password";
        } else {
            return "Incorrect password";
        }
    }
}

}
