// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ERC4907.sol";

contract ERC4907Demo is ERC4907 {
    constructor(string memory _name, string memory _symbol) ERC4907(_name, _symbol) {}

    function mint(uint tokenId, address to) public {
        _mint(to, tokenId);
    }
}
