pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Mintable is ERC721 {
    function mint(address account, uint256 id) public {
        _mint(account, id);
    }
}
