"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, Home, Image as ImageIcon, Users, Mail, MapPin } from "lucide-react";
import styles from "./SideNav.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function SideNav({ isOpen, onClose }) {
  const pathname = usePathname();
  const [openCategory, setOpenCategory] = useState(null);

  const handleScroll = (e, id) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        onClose();
      }
    }
  };

  const toggleCategory = (cat) => {
    setOpenCategory(openCategory === cat ? null : cat);
  };

  const categories = [
    {
      id: "rent",
      title: "Rent from us",
      icon: "/assets/nav-icons/rent.png",
      subItems: [
        { label: "Blazers", link: "/rent#blazers" },
        { label: "Full Suits", link: "/rent#full-suits" },
        { label: "Western type", link: "/rent#western-type" },
        { label: "National", link: "/rent#national" },
        { label: "Kurta", link: "/rent#kurta" },
      ]
    },
    {
      id: "weddings",
      title: "Weddings with HAVELOCK",
      icon: "/assets/nav-icons/wedding-suit.png",
      subItems: [
        { label: "Tailoring", link: "/weddings#tailoring" },
        { label: "First Fitting", link: "/weddings#first-fitting" },
        { label: "Rent Out", link: "/weddings#rent-out" },
      ]
    },
    {
      id: "custom",
      title: "Custom Tailoring",
      icon: "/assets/nav-icons/needle.png",
      subItems: [
        { label: "Full Suits", link: "/custom-tailoring#full-suits" },
        { label: "Blazers", link: "/custom-tailoring#blazers" },
        { label: "Shirts", link: "/custom-tailoring#shirts" },
        { label: "Trousers", link: "/custom-tailoring#trousers" },
      ]
    }
  ];

  return (
    <>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`} 
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      />
      <div className={`${styles.sideNav} ${isOpen ? styles.sideNavOpen : ""}`}>
        <div className={styles.navHeader}>
          <div className={styles.brand}>
            HAVELOCK TAILORS<span>&reg;</span>
          </div>
          <div className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </div>
        </div>

        <div className={styles.navContent}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.catTag}>
              <div className={styles.mainLink} onClick={() => toggleCategory(cat.id)}>
                <div className={styles.mainLinkLeft}>
                  <img src={cat.icon} alt={cat.title} />
                  <p>{cat.title}</p>
                </div>
                <ChevronDown 
                  size={20} 
                  className={`${styles.chevron} ${openCategory === cat.id ? styles.chevronOpen : ""}`} 
                />
              </div>
              <AnimatePresence>
                {openCategory === cat.id && (
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className={styles.subLinks}
                  >
                    {cat.subItems.map((item, idx) => (
                      <Link key={idx} href={item.link} className={styles.subLinkItem} onClick={onClose}>
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className={styles.separator}></div>

          <div className={styles.subNavContent}>
            <Link href="/" className={styles.secTag} onClick={(e) => handleScroll(e, 'home')}>
              <Home size={22} strokeWidth={1.5} />
              <p className={styles.secTagName}>Home</p>
            </Link>
            <Link href="/#gallery" className={styles.secTag} onClick={(e) => handleScroll(e, 'gallery')}>
              <ImageIcon size={22} strokeWidth={1.5} />
              <p className={styles.secTagName}>Gallery</p>
            </Link>
            <Link href="/#about-us" className={styles.secTag} onClick={(e) => handleScroll(e, 'about-us')}>
              <Users size={22} strokeWidth={1.5} />
              <p className={styles.secTagName}>About us</p>
            </Link>
            <Link href="/#contact-us" className={styles.secTag} onClick={(e) => handleScroll(e, 'contact-us')}>
              <Mail size={22} strokeWidth={1.5} />
              <p className={styles.secTagName}>Contact us</p>
            </Link>
            <a href="https://maps.app.goo.gl/sk5ZDCaExmvZ8L9n6" target="_blank" rel="noopener noreferrer" className={styles.secTag} onClick={onClose}>
              <MapPin size={22} strokeWidth={1.5} />
              <p className={styles.secTagName}>Locate us</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
