import "./globals.css";

import { Montserrat } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Noctyra",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>

  );
}
