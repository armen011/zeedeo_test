import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Providers from "./Providers";

const sourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeedeo",
  description: "Your social Video app so you can Stand out, Grow and Connect",
  icons: "/favicon.jpg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={sourceSansPro.className}>{children}</body>
      </Providers>
    </html>
  );
}
