import styles from "./cakes.module.css";

function Cakes() {
  return (
    <section className={styles.container}>
      <ul>
        <li>
          <h2>basic cakes</h2>
          <div className={styles.list__item}>
            <img src="/assets/images/basic.jpg" alt="cake" />
          </div>
        </li>
        <li>
          <h2>special occasions</h2>
          <div className={styles.list__item}>
            <img src="/assets/images/venom.jpg" alt="cake" />
          </div>
        </li>
        <li>
          <h2>tray bakes</h2>
          <div className={styles.list__item}>
            <img src="/assets/images/traybake.jpg" alt="cake" />
          </div>
        </li>
        <li>
          <h2>other</h2>
          <div className={styles.list__item}>
            <img src="/assets/images/cheesecake.jpg" alt="cake" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Cakes;
