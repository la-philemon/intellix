import type { Metadata } from "next";
import { Oswald, Permanent_Marker } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "@/components/navbar/Footer";

const geistSans = Oswald({
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistMono = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intellix",
  description: "shop with us",
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
        < NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
