"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import styles from "./Gallery.module.css";

const images = [
  "/assets/gallery/ratio 9 - 16/img2.webp",
  "/assets/gallery/ratio 3 - 4/img2.webp",
  "/assets/gallery/ratio 2 - 3/img2.webp",
  "/assets/gallery/ratio 9 - 16/img1.webp",
  "/assets/gallery/ratio 1.85 - 1/img1.webp",
  "/assets/gallery/ratio 9 - 16/img3.webp",
  "/assets/gallery/ratio 3 - 4/img1.webp",
  "/assets/gallery/ratio 4 - 5/img2.webp",
  "/assets/gallery/ratio 2 - 3/img1.webp",
  "/assets/gallery/ratio 4 - 5/img1.webp",
  "/assets/gallery/ratio 3 - 2/img1.webp"
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const directionRef = useRef(1); // 1 for down, -1 for up

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isHovered) {
        // Change direction if we hit top or bottom
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 1) {
          directionRef.current = -1;
        } else if (scrollContainer.scrollTop <= 0) {
          directionRef.current = 1;
        }

        scrollContainer.scrollTop += directionRef.current * 0.8; // adjust speed here
      }
      animationRef.current = requestAnimationFrame(autoScroll);
    };

    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  const manualScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: dir === 'up' ? -300 : 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.gallerySection} id="gallery">
      <div className={styles.headline}>
        <span className={styles.bgTitle}>See Our Works</span>
        <h2 className={styles.fgTitle}>Your Style, Our Expertise</h2>
        <p>Explore how we bring your unique vision to life with our tailoring mastery.</p>
      </div>

      <div 
        className={styles.galleryContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.controls}>
          <div className={styles.controlBtn} onClick={() => manualScroll('up')}>
            <ChevronUp size={24} />
          </div>
          <div className={styles.controlBtn} onClick={() => manualScroll('down')}>
            <ChevronDown size={24} />
          </div>
        </div>

        <div className={styles.scrollArea} ref={scrollRef}>
          <div className={styles.masonryGrid}>
            {/* Render images twice for a continuous feel or just a long list */}
            {[...images, ...images].map((src, index) => (
              <div key={index} className={styles.card}>
                <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
