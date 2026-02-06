import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar"; // This "grabs" your sidebar component

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TaskPro | Management Dashboard",
  description: "Built by an aspiring Frontend Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased bg-slate-50 flex`}>
        {/* The Sidebar stays on the left */}
        <Sidebar />

        {/* The Main Content area takes up the rest of the space */}
        <main className="flex-1 h-screen overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}