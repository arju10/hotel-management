import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

import ThemeProvider from "./components/ThemeProvider/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Holel Management",
  description:
    "Hotel Management involves the efficient coordination of various hotel operations to ensure exceptional guest experiences and maximize profitability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
  
          <main className="font-normal">
            <Header />
            {children}
            <Footer />
          </main>

      </body>
    </html>
  );
}
