import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import "./variables.scss";
import Navigation from "../../components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyDiray",
  description: "My Diary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
