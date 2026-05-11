"use client";

import ContentSlider from "@/components/ContentSlider";
import styles from "./Home.module.css";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
import Link from "next/link";

export default function Home() {
  const rentItems = [
    { image: "/assets/products-images/blazer.webp", label: "Blazers" },
    { image: "/assets/products-images/blazer-trouser.webp", label: "Full Suits" },
    { image: "/assets/products-images/full-wedding-suit.webp", label: "Western type" },
    { image: "/assets/products-images/wedding-national-suit.webp", label: "National" },
    { image: "/assets/products-images/wedding-kurta.webp", label: "Kurta" },
  ];

  const weddingItems = [
    { image: "/assets/products-images/tailoring.webp", label: "Tailoring" },
    { image: "/assets/products-images/first-fitting.webp", label: "First Fitting" },
    { image: "/assets/products-images/rent-out.webp", label: "Rent Out" },
  ];

  const customItems = [
    { image: "/assets/products-images/custom-full-suit.webp", label: "Full Suits" },
    { image: "/assets/products-images/custom-blazer.webp", label: "Blazers" },
    { image: "/assets/products-images/custom-shirt.webp", label: "Shirts" },
    { image: "/assets/products-images/custom-shirt.webp", label: "Trousers" }, // NOTE: Old site had same image for shirts and trousers
  ];

  return (
    <>
      <div className={styles.pagesNav}>
        <Link href="/rent"><div>Rental</div></Link>
        <Link href="/weddings"><div>Weddings</div></Link>
        <Link href="/custom-tailoring"><div>Custom Tailoring</div></Link>
      </div>

      <div className={styles.homeHeadline} id="home">
        <img 
          src="/assets/headers/homepage-header-img1.avif" 
          alt="Havelock Tailors" 
          className={styles.headlineImg} 
        />
      </div>

      <div className={styles.homeContent}>
        <ContentSlider title="Rent from us" link="/rent" items={rentItems} />
        <ContentSlider title="Weddings with HAVELOCK" link="/weddings" items={weddingItems} />
        <ContentSlider title="Custom Tailoring" link="/custom-tailoring" items={customItems} />
      </div>

      <Gallery />

      <section id="about-us" className={styles.aboutUsSection}>
        <h2>About Us</h2>
        <div className={styles.aboutContent}>
          <p>
            Welcome to Havelock Tailors, your premier destination for exquisite bespoke tailoring and high-quality formal wear rentals. With decades of experience in the heart of the city, we have dedicated ourselves to the art of perfectly fitted garments.
          </p>
          <p>
            Whether you are looking to rent an elegant suit for a special evening, planning the perfect wedding attire, or seeking a custom-tailored masterpiece that fits you like a second skin, our master tailors are here to bring your vision to life with precision and care.
          </p>
          <p>
            Quality fabrics, meticulous attention to detail, and unparalleled customer service are the cornerstones of our brand. Step into our world of sartorial elegance and let us craft your legacy.
          </p>
        </div>
      </section>

      <GoogleReviews />
    </>
  );
}
