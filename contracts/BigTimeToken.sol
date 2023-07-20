//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BigTimeToken is ERC20, Ownable {
    uint private _initial_supply;
    constructor(
        string memory _name, string memory _symbol, uint _decimals, uint _totalSupply
    ) ERC20(_name, _symbol) {
        _initial_supply = _totalSupply * _decimals;
        _mint(msg.sender, _initial_supply);
    }
}
