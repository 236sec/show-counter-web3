// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract Counter {
    uint public x;

    constructor(uint initialValue) {
        x = initialValue;
    }

    event CounterChanged(uint from, uint to);

    function incBy(uint by) public {
        require(by > 0, "incBy: increment should be positive");
        uint oldValue = x;
        x += by;
        emit CounterChanged(oldValue, x);
    }
}
