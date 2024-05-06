import styles from "./landing.module.css";
// import Carousel from "../../components/carousel/carousel";
// import { carouselData } from "../../data/carouselData";
import Cakes from "./sections/cakes/cakes";
import Prices from "./sections/prices/prices";
import Gallery from "./sections/gallery/gallery";

function Landing() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h1>kirstys home bakes</h1>
        <p>
          <span>delicious</span> home baked cakes & treats made to order.
        </p>
      </div>
      <Gallery />
      {/* <Carousel data={carouselData} /> */}
      <Cakes />

      <Prices />
    </section>
  );
}

export default Landing;
