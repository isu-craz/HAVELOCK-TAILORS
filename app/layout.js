import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/MainLayout";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-primary",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "The Smart Tailoring | HAVELOCK TAILORS",
  description: "Explore how we bring your unique vision to life with our tailoring mastery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
