import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Biblia DApp",
  description: "A Bíblia Sagrada na Blockchain Stellar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={inter.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
