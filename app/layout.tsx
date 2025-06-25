// app/layout.tsx

import "./globals.css";
import Navbar from "./components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artistly.com – Book Performing Artists",
  description: "Discover and book singers, dancers, speakers, and DJs for your events.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* This is where your single Navbar is rendered */}
        {children}
      </body>
    </html>
  );
}