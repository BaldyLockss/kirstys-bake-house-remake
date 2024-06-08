import styles from "./landing.module.css";
import Carousel from "../../components/carousel/carousel";
import { carouselData } from "../../data/carouselData";
import { bento } from "../../data/bento";
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

      <Carousel data={carouselData} />
      <Cakes />
      <Gallery data={bento} />
      <Prices />
    </section>
  );
}

export default Landing;
