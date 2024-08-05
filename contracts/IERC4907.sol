// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IERC4907 {
    event UpdateUser(uint indexed tokenId, address indexed user, uint64 expires);

    function setUser(uint tokenId, address user, uint64 expires) external;
    function userOf(uint tokenId) view external returns(address);
    function userExpires(uint tokenId) view external returns(uint);
}