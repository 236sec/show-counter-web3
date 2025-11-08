export const counterAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialValue",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "CounterChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "by",
        type: "uint256",
      },
    ],
    name: "incBy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
