
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import ToasterProvider from "./ToasterProvider";

const noto_Serif_Bengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata = {
  title: "Bazar Dor",
  description: "Bazar Dor online marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${noto_Serif_Bengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />

        <div className="bg-[#F0F5F0]">
          <main className="container mx-auto py-4">
            {children}
            <ToasterProvider></ToasterProvider>
          </main>
        </div>

        <Footer />

        <ToasterProvider />
      </body>
    </html>
  );
}