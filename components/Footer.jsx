import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact-us">
      <div className={styles.container}>
        <div className={styles.brandSection}>
          <h3>HAVELOCK TAILORS<span>&reg;</span></h3>
          <p>Your Style, Our Expertise. Explore how we bring your unique vision to life with our tailoring mastery.</p>
          <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
            {/* <a href="#" style={{ color: 'var(--accent-color)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a> */}
            <a href="https://web.facebook.com/p/Havelock-Tailors-100071442137667/?_rdc=1&_rdr#" target="_blank" style={{ color: 'var(--accent-color)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <div className={styles.linksList}>
            <Link href="/rent">Rent from us</Link>
            <Link href="/weddings">Weddings</Link>
            <Link href="/custom-tailoring">Custom Tailoring</Link>
            <Link href="/#gallery">Gallery</Link>
          </div>
        </div>

        <div className={styles.contactSection}>
          <h4>Contact Us</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <MapPin size={18} style={{ color: 'var(--accent-color)' }} />
              <a href="https://maps.app.goo.gl/sk5ZDCaExmvZ8L9n6" target="_blank" rel="noopener noreferrer">
                Delkanda, 458 High Level Rd, Nugegoda
              </a>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} style={{ color: 'var(--accent-color)' }} />
              <a href="tel:+94711863680">+94 711 863 680</a>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} style={{ color: 'var(--accent-color)' }} />
              <a href="mailto:info@havelocktailors.com">info@havelocktailors.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Havelock Tailors. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
