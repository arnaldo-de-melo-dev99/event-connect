
import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <meta charSet="U-TF8" />
      <body className= 'bg-black h-full'>
        { children }
      </body>
    </html>
  );
}
