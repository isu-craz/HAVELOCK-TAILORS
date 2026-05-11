"use client";

import { Star } from "lucide-react";
import styles from "./GoogleReviews.module.css";

// ============================================================================
// EDIT YOUR REVIEWS HERE
// You can add, remove, or modify these reviews. 
// Just make sure to keep the same format!
// ============================================================================
const REVIEWS = [
  {
    id: 1,
    name: "Sithum Lahiru",
    initial: "S",
    text: "Super decent place to rent suits, trousers for your need. Highly recommended!",
    date: "May 2024",
    link: "https://maps.app.goo.gl/9zinkGLtnY2FrZdc6"
  },
  {
    id: 2,
    name: "Lakpriya Kottahachchi",
    initial: "L",
    text: "Absolutely stunning suits! The fit was perfect.",
    date: "May 2025",
    link: "https://maps.app.goo.gl/63VW8SnAfEBkfDig8"
  },
  {
    id: 3,
    name: "Rifthy Ahamed",
    initial: "R",
    text: "Reasonable price and flexible for returns",
    date: "May 2026",
    link: "https://maps.app.goo.gl/boGvodtPbPwPoETQ9"
  },
    {  
    id: 4,
    name: "Seminda dilshan (Humpty)",
    initial: "S",
    text: "Good service",
    date: "Apr 2025",
    link: "https://maps.app.goo.gl/tGv4eHkezUiSgZL48"
  },
  {
    id: 5,
    name: "Sakindu Weenath",
    initial: "S",
    text: "Good and friendly service. Recommended",
    date: "Apr 2026",
    link: "https://maps.app.goo.gl/NBKBrfQ6RNhp6dSq5"
  },
  {
    id: 5,
    name: "Sakindu Weenath",
    initial: "S",
    text: "Good and friendly service. Recommended",
    date: "Apr 2026",
    link: "https://maps.app.goo.gl/NBKBrfQ6RNhp6dSq5"
  }
  // Note: Add at least 4-5 reviews to make the infinite scrolling loop look good!
];

export default function GoogleReviews() {
  // We duplicate the reviews array to create a seamless infinite scrolling loop
  const scrollItems = [...REVIEWS, ...REVIEWS];

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.header}>
        <h2>What Our Clients Say</h2>
        <a 
          href="https://g.page/r/CQ8mfmAQU8zIEBM/review" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.writeReviewBtn}
        >
          Write a Review
        </a>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {scrollItems.map((review, index) => (
            <div key={`${review.id}-${index}`} className={styles.reviewCard}>
              <a 
                href={review.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.cardHeader}
              >
                <div className={styles.userInitial}>
                  {review.initial}
                </div>
                <div className={styles.userInfo}>
                  <h4>{review.name}</h4>
                  <span className={styles.date}>{review.date}</span>
                </div>
                {/* Official Google G Logo SVG */}
                <div className={styles.googleLogo}>
                  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </a>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#FBBC04" color="#FBBC04" />
                ))}
              </div>
              <p className={styles.reviewText}>
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
