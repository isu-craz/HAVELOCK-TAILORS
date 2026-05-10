import styles from "../SubPage.module.css";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Weddings with HAVELOCK | HAVELOCK TAILORS",
  description: "Exquisite tailoring and rental services for your special wedding day.",
};

export default function WeddingsPage() {
  const categories = [
    { id: "tailoring", title: "Tailoring", image: "/assets/products-images/tailoring.webp", desc: "Bespoke wedding suits crafted to your exact measurements and style." },
    { id: "first-fitting", title: "First Fitting", image: "/assets/products-images/first-fitting.webp", desc: "Experience the perfect fit with our dedicated first fitting sessions." },
    { id: "rent-out", title: "Rent Out", image: "/assets/products-images/rent-out.webp", desc: "High-quality wedding attire available for rent for your entire groomsmen party." }
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <img src="/assets/headers/homepage-header-img1.avif" alt="Weddings with Havelock" className={styles.headerImg} />
        <div className={styles.headerContent}>
          <h1>Weddings</h1>
          <p>Make Your Special Day Unforgettable</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Wedding Services</h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div className={styles.card} id={cat.id} key={cat.id}>
              <div className={styles.cardImgCon}>
                <img src={cat.image} alt={cat.title} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Gallery />
    </>
  );
}
