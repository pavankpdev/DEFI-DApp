pragma solidity ^0.5.0;

contract  Migration {
    address public owner;
    uint public last_completed_migration;

    constructor() public{
        owner = msg.sender;
    }

    modifier restricted(){
        if(msg.sender == owner) _;
    }

    function setCompleted(uint completed) public restriction {
        last_completed_migration = completed;
    }

    function upgrade(address new_Address) public restricted {
        Migration upgraded = Migration(new_Address);
        upgraded.setCompleted(last_completed_migration);
    }
}

