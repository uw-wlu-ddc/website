import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Double Degree Club",
  description: "A website for Double Degrees"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
