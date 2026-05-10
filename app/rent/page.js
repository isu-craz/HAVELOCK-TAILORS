import styles from "../SubPage.module.css";
import Gallery from "@/components/Gallery";

export const metadata = {
  title: "Rent from us | HAVELOCK TAILORS",
  description: "Rent premium formal wear from Havelock Tailors.",
};

export default function RentPage() {
  const categories = [
    { id: "blazers", title: "Blazers", image: "/assets/products-images/blazer.webp", desc: "Elevate your smart-casual look with our collection of premium blazers." },
    { id: "full-suits", title: "Full Suits", image: "/assets/products-images/blazer-trouser.webp", desc: "Classic, perfectly tailored full suits for any formal occasion." },
    { id: "western-type", title: "Western type", image: "/assets/products-images/full-wedding-suit.webp", desc: "Sophisticated Western-style suits designed to make a statement." },
    { id: "national", title: "National", image: "/assets/products-images/wedding-national-suit.webp", desc: "Traditional Sri Lankan national dress crafted with elegance." },
    { id: "kurta", title: "Kurta", image: "/assets/products-images/wedding-kurta.webp", desc: "Stylish and comfortable Kurtas for cultural events and weddings." }
  ];

  return (
    <>
      <div className={styles.pageHeader}>
        <img src="/assets/headers/homepage-header-img1.avif" alt="Rent from us" className={styles.headerImg} />
        <div className={styles.headerContent}>
          <h1>Rent from us</h1>
          <p>Premium Formal Wear for Your Special Occasion</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Rental Collection</h2>
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
