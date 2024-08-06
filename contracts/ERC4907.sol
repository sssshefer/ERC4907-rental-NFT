// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "./ERC721.sol";
import "./IERC4907.sol";

contract ERC4907 is ERC721, IERC4907 {
    struct UserInfo {
        address user, 
        uint65 expires
    }

    mapping(uint => UserInfo) public users;

    constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_){

    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
        return interfaceId == type(IERC4907).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    function setUser(uint tokenId, address user, uint64 expires) public virtual {
        require(_isApprovedOrOwner(msg.sender, tokenId));

        UserInfo userInfo storage = users[tokenId];
        userInfo.user = user;
        userInfo.expires = expires;

        emit UpdateUser(tokenId, user, expires);
    }

    function userOf(uint tokenId) public view returns (address) virtual{
        return(block.timestamp > expires ? address(0): users[tokenId].user);
    }

    function userExpires(uint tokenId) external view returns (uint){
        return users[tokenId].expires;
    }

     function _beforeTokenTransfer(
        address from, 
        address to,
        uint256 tokenId,
        uint batchSize
    ) internal virtual override{
        super._beforeTokenTransfer(from,to, tokenId, batchSize);
        
        if(from != to && _users[tokenId].user != address(0)){
            delete users[tokenId];

            emit UpdateUser(tokenId, address(0), 0);
        }
    }
}
