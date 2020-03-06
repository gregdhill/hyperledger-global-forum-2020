pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mintable is ERC20 {
    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}

contract Burnable is Mintable {
    function burn(address account, uint256 amount) public {
        _burn(account, amount);
    }
}

contract Capped is Burnable {
    using SafeMath for uint256;

    uint256 private _cap;

    constructor (uint256 cap) public {
        _cap = cap;
    }

    function mint(address account, uint256 amount) public {
        if (amount.add(totalSupply()) > _cap) {
            revert("NO MINT");
        }
        _mint(account, amount);
    }
}
