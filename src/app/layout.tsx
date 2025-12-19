// src/app/layout.tsx
import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata = {
  title: "Sammunat | Smart Digital Solutions",
  description: "Empowering businesses with scalable and modern software solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
