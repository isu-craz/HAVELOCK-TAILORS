"use client";

import Link from "next/link";
import { MapPin, Menu } from "lucide-react";
import styles from "./Header.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function Header({ onMenuClick }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e, id) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={styles.header}>
      {/* Top Navigation Bar */}
      <div className={styles.navBar}>
        <nav className={styles.nav}>
          <div className={styles.leftSection}>
            <div>
              <a href="https://maps.app.goo.gl/sk5ZDCaExmvZ8L9n6" target="_blank" rel="noopener noreferrer">
                <MapPin size={16} /> Locate us
              </a>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div><Link href="/" onClick={(e) => handleScroll(e, 'home')}>Home</Link></div>
            <div><Link href="/#gallery" onClick={(e) => handleScroll(e, 'gallery')}>Gallery</Link></div>
            <div><Link href="/#about-us" onClick={(e) => handleScroll(e, 'about-us')}>About us</Link></div>
            <div><Link href="/#contact-us" onClick={(e) => handleScroll(e, 'contact-us')}>Contact us</Link></div>
          </div>
        </nav>
      </div>

      {/* Main Panel */}
      <div className={styles.panelSection}>
        <div className={styles.panel}>
          <div className={styles.leftSide}>
            <div 
              className={styles.menuIcon} 
              onClick={(e) => {
                e.stopPropagation();
                onMenuClick();
              }}
            >
              <Menu size={24} />
            </div>
          </div>
          
          <div className={styles.brandName}>
            <Link href="/">
              HAVELOCK TAILORS<span>&reg;</span>
            </Link>
          </div>
          
          <div className={styles.rightSide}></div>
        </div>
      </div>

    </header>
  );
}
