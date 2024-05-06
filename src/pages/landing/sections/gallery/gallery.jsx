import styles from "./gallery.module.css";

function Gallery() {
  return (
    <div className={styles.container} id="gallery">
      <div className={styles.title}>
        <h2>gallery</h2>
        <p>
          <span>see</span> a selection of my cakes
        </p>
      </div>
      <div className={styles.bento__container}>
        <div className={styles.bento__grid}>
          <img src="/assets/images/starlink.jpg" alt="roccket" />
          <img src="/assets/images/ussf.jpg" alt="roccket" />
          <img src="/assets/images/multiplanetary.jpg" alt="roccket" />
          <img src="/assets/images/testflight.jpg" alt="roccket" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
