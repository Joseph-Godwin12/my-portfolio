// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Joseph Egbucha | Frontend & Mobile Developer",
  description: "Portfolio showcasing frontend and mobile development work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}