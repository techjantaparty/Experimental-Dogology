import WalletButton from "@/components/WalletButton";
import React from "react";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-bl from-[#1B1B1B] via-[#2d2d2d] to-[#1B1B1B] min-h-screen">
      <div className="absolute top-6 right-6">
        <WalletButton />
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
