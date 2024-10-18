import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Double Degree Club",
  description: "A website for Double Degrees"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-purple">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
