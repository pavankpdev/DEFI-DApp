pragma solidity ^0.5.0;

import "./Tether.sol";
import "./RWD.sol";


contract DecentralBank {
    address public owner;
    string public name = "Decentral Bank";

    Tether public tether;
    RWD public rwd;

    address[] public stakers;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaked;


    constructor(RWD _rwd,Tether _tether) public {
        rwd = _rwd;
        tether = _tether;

    }

    function depositTokens(uint amount) public {

        require(amount > 0, "Amount cannot be 0");

        // Transfer Tether tokens
        tether.transferFrom(msg.sender, address(this), amount);

        stakingBalance[msg.sender] = stakingBalance[msg.sender] + _amount;

        if(!hasStaked){
            stakers.push[msg.sender];
        }

        isStaked[msg.sender] = true;
        hasStaked[msg.sender] = true;

    }



}
