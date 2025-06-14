import type { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Double Degree Club",
    description: "A website for Double Degrees",
    icons: {
        icon: "/icon.svg"
    }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
      <html className="!scroll-smooth" lang="en">
        <body>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </body>
      </html>
  );
}
