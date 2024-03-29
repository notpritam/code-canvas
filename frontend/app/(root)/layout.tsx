import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeCanvas",
  description: "Learn, Code, Connect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="w-screen h-screen max-h-screen max-w-screen flex overflow-hidden pt-[60px]">
          <Header />
          <Navbar />
          {children}
          <Sidebar />
        </main>
      </body>
    </html>
  );
}
