pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mintable is ERC20 {
    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
