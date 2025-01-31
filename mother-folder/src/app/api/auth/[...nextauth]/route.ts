/* eslint-disable @typescript-eslint/no-explicit-any */
import { publicClient } from "@/lib/wagmi";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";
import {
  type SiweMessage,
  parseSiweMessage,
  validateSiweMessage,
} from "viem/siwe";

export function getAuthOptions(): NextAuthOptions {
  return {
    providers: [
      CredentialsProvider({
        async authorize(credentials: any) {
          try {
            const siweMessage = parseSiweMessage(
              credentials?.message
            ) as SiweMessage;

            if (
              !validateSiweMessage({
                address: siweMessage?.address,
                message: siweMessage,
              })
            ) {
              return null;
            }

            const nextAuthUrl =
              process.env.NEXTAUTH_URL ||
              (process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : null);
            if (!nextAuthUrl) {
              return null;
            }

            const nextAuthHost = new URL(nextAuthUrl).host;
            if (siweMessage.domain !== nextAuthHost) {
              return null;
            }

            const csrfToken = await getCsrfToken();
            if (siweMessage.nonce !== csrfToken) {
              return null;
            }

            const valid = await publicClient.verifyMessage({
              address: siweMessage?.address,
              message: credentials?.message,
              signature: credentials?.signature,
            });

            if (!valid) {
              return null;
            }

            return { id: siweMessage.address };
          } catch {
            return null;
          }
        },
        credentials: {
          message: { label: "Message", type: "text", placeholder: "0x0" },
          signature: { label: "Signature", type: "text", placeholder: "0x0" },
        },
        name: "Ethereum",
      }),
    ],
    callbacks: {
      async session({ session, token }) {
        session.address = token.sub;
        session.user = { name: token.sub };
        return session;
      },
    },
    secret: process.env.NEXT_AUTH_SECRET,
    session: { strategy: "jwt" },
  };
}

const handler = NextAuth(getAuthOptions());

export { handler as GET, handler as POST };
