import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Galley-La",
  description: "Nextjs photo gallery using cloudinary API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased dark`}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 px-8 py-5">{children}</div>
        </div>
      </body>
    </html>
  );
}
