import "./globals.css";

import { Montserrat } from "next/font/google";
import { type Metadata } from "next";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/Footer/Footer";
import StickyCursor from "~/components/StickyCursor/StickyCursor";

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
        <StickyCursor />

        {children}
        <Footer />
      </body>
    </html>
  );
}
