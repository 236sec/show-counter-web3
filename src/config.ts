import { createConfig, http, webSocket } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { defineChain } from "viem";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const hardhat = defineChain({
  id: 31337,
  name: "Hardhat",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"],
    },
  },
});

export const config = createConfig({
  // chains: [mainnet, sepolia, hardhat],
  chains: [hardhat],
  transports: {
    // [mainnet.id]: http(),
    // [sepolia.id]: http(),
    [hardhat.id]: webSocket(),
  },
  ssr: true,
  syncConnectedChain: true,
});
