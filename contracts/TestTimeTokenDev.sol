//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract TestTimeDev is Initializable, ERC20Upgradeable, ERC20BurnableUpgradeable, PausableUpgradeable, OwnableUpgradeable {
    uint constant _initial_supply = 1000000 * (10**18);
    
    function initialize() initializer public {
      __ERC20_init("TestTimeDev", "TIMEDEV");
      __ERC20Burnable_init();
      __Pausable_init();
      __Ownable_init();
      _mint(msg.sender, _initial_supply);
    }

    function pause() public onlyOwner {
      _pause();
    }

    function unpause() public onlyOwner {
      _unpause();
    }

    function mint(address to, uint256 amount) public {
      _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
      internal
      whenNotPaused
      override
    {
      super._beforeTokenTransfer(from, to, amount);
    }
}
