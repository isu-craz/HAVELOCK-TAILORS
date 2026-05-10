import styles from "../SubPage.module.css";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Custom Tailoring | HAVELOCK TAILORS",
  description: "Bespoke custom tailoring services for suits, blazers, shirts, and trousers.",
};

export default function CustomTailoringPage() {
  const categories = [
    { id: "full-suits", title: "Full Suits", image: "/assets/products-images/custom-full-suit.webp", desc: "Experience the ultimate luxury of a perfectly fitted custom suit." },
    { id: "blazers", title: "Blazers", image: "/assets/products-images/custom-blazer.webp", desc: "Tailor-made blazers that define your personal style and elegance." },
    { id: "shirts", title: "Shirts", image: "/assets/products-images/custom-shirt.webp", desc: "Crisp, custom-tailored shirts designed for exceptional comfort and fit." },
    { id: "trousers", title: "Trousers", image: "/assets/products-images/custom-shirt.webp", desc: "Precision-cut trousers that offer a flawless silhouette." }
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <img src="/assets/headers/homepage-header-img1.avif" alt="Custom Tailoring" className={styles.headerImg} />
        <div className={styles.headerContent}>
          <h1>Custom Tailoring</h1>
          <p>Crafted to Perfection, Just for You</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Tailoring Options</h2>
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
