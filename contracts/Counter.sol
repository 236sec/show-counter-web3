// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.5.0;

contract Counter {
  uint256 public count;

  event Increased(uint256 newCount);

  function increase() public {
    count += 1;
    emit Increased(count);
  }
}