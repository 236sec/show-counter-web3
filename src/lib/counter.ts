export const counterAddress =
  process.env.NEXT_PUBLIC_COUNTER_ADDRESS ||
  "0x0000000000000000000000000000000000000000"; // <-- replace with your deployed contract address

export const counterAbi = [
  {
    constant: true,
    inputs: [],
    name: "count",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "newCount", type: "uint256" }],
    name: "Increased",
    type: "event",
  },
  {
    constant: false,
    inputs: [],
    name: "increase",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
