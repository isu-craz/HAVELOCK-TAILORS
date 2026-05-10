"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import SideNav from "./SideNav";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";
import styles from "./MainLayout.module.css";

export default function MainLayout({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Header onMenuClick={() => setIsNavOpen(true)} />
      <SideNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div style={{ overflowX: 'hidden', width: '100%' }}>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </div>

      {/* Gallery Side Tab */}
      <Link href="/#gallery" className={styles.galleryTab}>
        <p style={{ margin: 0 }}>Gallery</p>
      </Link>

      {/* WhatsApp Button */}
      <div className={styles.whatsappContainer}>
        <a 
          href="https://wa.me/+94711863680" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <p className={styles.whatsappBtn}>
            <MessageCircle size={20} />
            Chat on WhatsApp
          </p>
        </a>
      </div>
    </>
  );
}
