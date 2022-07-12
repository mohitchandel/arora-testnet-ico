// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {

    address admin;

    constructor() ERC20("Fresh Token", "FRTK") {
        admin = msg.sender;
        mintToken(admin);
    }

    function mintToken(address _admin) internal {
        _mint(_admin, 100000000 * (10**decimals()));
    }
}
