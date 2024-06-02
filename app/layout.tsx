import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";

import "./globals.css";
import Providers from "./Providers";

const sourceSansPro = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeedeo",
  description: "Your social Video app so you can Stand out, Grow and Connect",
  icons: "/favicon.jpg",
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <Providers>
        <body className={sourceSansPro.className}>{children}</body>
      </Providers>
    </html>
  );
}
