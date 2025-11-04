"use client";

import { useState } from "react";
import {
  useAccount,
  useWatchContractEvent,
  useReadContract,
  useSimulateContract,
  useWriteContract,
} from "wagmi";
import { counterAbi, counterAddress } from "@/lib/counter";

export default function Counter() {
  const { address: account } = useAccount();
  const [localCount, setLocalCount] = useState<number | null>(null);

  // Read the current count and re-run when block changes / watch
  useReadContract({
    address: counterAddress as `0x${string}`,
    abi: counterAbi,
    functionName: "count",
  });

  // Listen for the Increased event and update local state in realtime
  useWatchContractEvent({
    address: counterAddress as `0x${string}`,
    abi: counterAbi,
    eventName: "Increased",
  });

  // Prepare and send a transaction to increase the counter (requires signer)
  const { config: writeConfig } = useSimulateContract({
    address: counterAddress as `0x${string}`,
    abi: counterAbi,
    functionName: "increase",
  });

  // const { write, isLoading: isWriting } = useWriteContract(writeConfig);

  return (
    <div className="max-w-xl rounded-lg border p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Counter (Wagmi example)</h2>
      <p className="mt-3">
        Current value: <strong>{localCount ?? "—"}</strong>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          onClick={() => write?.()}
          disabled={!write || isWriting}
        >
          {isWriting ? "Sending…" : "Increase"}
        </button>
        {!account && (
          <div className="text-sm text-gray-500">
            Connect a wallet to send a transaction.
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-gray-600">
        This component uses wagmi hooks (useContractRead with watch and
        useContractEvent) to update the UI in realtime when the contract emits
        an Increased event.
      </p>
    </div>
  );
}
