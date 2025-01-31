import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { publicActions } from "viem";
import { avalanche, avalancheFuji, polygon } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "justice",
  projectId: "f232e88ed6ffc301bd10b0fcc4d1ae2f",
  chains: [avalanche, avalancheFuji, polygon],
  ssr: true,
});

export const publicClient = config.getClient().extend(publicActions);
