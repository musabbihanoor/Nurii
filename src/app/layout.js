import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nurii",
  description: "Nurii is a catalyst for innovation, a bridge between traditional finance and the blockchain future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={...inter.className + " bg-[#000] text-[#fff] flex flex-col min-h-screen"}>
        <div className="bg-[#000] w-full h-screen absolute top-0 left-0"></div>
        <Navbar/>
        <div className="flex-1 flex flex-col">
        {children}</div>    
        <Footer/>
      </body>
    </html>
  );
}
