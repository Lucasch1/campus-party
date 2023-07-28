// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract NFT is ERC721Enumerable, Ownable {
    uint[] public ids;
    mapping(address => uint[]) userNFTs;
    mapping(uint => string) idIpfs;

    constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

    function mint(address to, string memory ipfsLink) public onlyOwner {
        uint256 tokenId = ids.length;
        ids.push(tokenId);
        _mint(to, tokenId);
        userNFTs[msg.sender].push(tokenId);
        idIpfs[tokenId] = ipfsLink;
    }

    function getTokenMetadata(uint256 tokenId) public view returns (string memory) {
        return (idIpfs[tokenId]);
    }
}
