import styles from "./gallery.module.css";

function Gallery(props) {
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
          {props.data.map((item, i) => {
            return (
              <div className={styles.grid__item} key={i}>
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
