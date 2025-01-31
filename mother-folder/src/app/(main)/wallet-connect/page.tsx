import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const WalletConnect = () => {
  return (
    <div className="px-6 relative overflow-hidden bg-gradient-to-b from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B] flex flex-col space-y-8 items-center justify-center min-h-screen">
      <div className="max-w-xl w-full bg-[#1B1B1B] p-6 rounded-lg shadow-2xl">
        <div className="space-y-4">
          <p className="text-2xl font-bold">
            Everything Starts with Transparency
          </p>
          <p className="text-gray-400">
            Connect Your Wallet and Be Part of the Change
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
