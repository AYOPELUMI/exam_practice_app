import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const geistSans = Source_Sans_3({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Source_Sans_3({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exam Practice App",
  description: "No 1 practice exam app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
