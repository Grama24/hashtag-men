import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from '../components/Header2.js'
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HashtagMEN",
  description: "Bine ați venit la Hashtag Men, un loc unde tradiția întâlnește modernitatea! Salonul a fost deschis în acest an cu scopul de a aduce un suflu nou în lumea tunsorilor.",
  icons: {
    icon: '../app/favicon.ico', // /public path
  },
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
