import type { Metadata } from "next";
import {Roboto_Slab} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../components/theme-provider";

const roboto = Roboto_Slab({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Law Voice",
  description: "Annonymously report any crime or injustice you see and raise your voice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Law Voice</title>
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dmbxx03vp/image/upload/v1730879535/TJP_bxnzi0.png"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dmbxx03vp/image/upload/v1730879535/TJP_bxnzi0.png" />
      </head>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
