"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

const WalletButton = () => {
  return (
    <ConnectButton
      accountStatus={{
        smallScreen: "avatar",
        largeScreen: "full",
      }}
      showBalance={false}
      chainStatus={"none"}
    />
  );
};

export default WalletButton;
