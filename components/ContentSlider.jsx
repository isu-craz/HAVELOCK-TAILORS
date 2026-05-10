"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "../app/Home.module.css";

export default function ContentSlider({ title, link, items }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.part}>
      <div className={styles.glassContainer}>
        <div className={styles.contentHeadline}>
          <Link href={link}>
            <h1>
            {title.split(" ").map((word, index) => (
              <span key={index}>{word}</span>
            ))}
          </h1>
        </Link>
      </div>
      
      <div className={styles.carouselContainer}>
        <div className={`${styles.navArrow} ${styles.leftArrow}`} onClick={() => scroll("left")}>
          <ChevronLeft size={28} />
        </div>
        
        <div className={styles.contentPics} ref={scrollRef}>
          {items.map((item, index) => (
            <div className={styles.homeImgCon} key={index}>
              <img src={item.image} alt={item.label} />
              <div className={styles.imgMask}>
                <p>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.navArrow} ${styles.rightArrow}`} onClick={() => scroll("right")}>
          <ChevronRight size={28} />
        </div>
      </div>
      </div>
    </div>
  );
}
