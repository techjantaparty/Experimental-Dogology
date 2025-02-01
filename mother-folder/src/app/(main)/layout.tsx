"use client";

import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { polygon, avalancheFuji, avalanche } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";
import { WalletProvider } from "@/context/WalletContext";

const config = getDefaultConfig({
  appName: "justice",
  projectId: "f232e88ed6ffc301bd10b0fcc4d1ae2f",
  chains: [polygon, avalancheFuji, avalanche],
  ssr: true,
});

const queryClient = new QueryClient();

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={darkTheme({
            accentColor: "#FFF",
            accentColorForeground: "black",
            borderRadius: "large",
            fontStack: "system",
          })}
        >
          <WalletProvider>{children}</WalletProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
