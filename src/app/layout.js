import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from '../components/Header2.js'
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HRZ MEDIA",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header2/>
        {children}
        <Footer/>
        </body>
        
    </html>
  );
}
