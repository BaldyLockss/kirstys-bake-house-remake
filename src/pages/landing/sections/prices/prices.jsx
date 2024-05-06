import styles from "./prices.module.css";

function Prices() {
  return (
    <div className={styles.container} id="prices">
      <div className={styles.title}>
        <h2>prices</h2>
        <p>
          <span>starting</span> from...
        </p>
      </div>

      <div className={styles.items}>
        <div className={styles.item}>
          <h3>cakes</h3>
          <p>standard £20</p>
          <p>fondant £50</p>
        </div>
        <div className={styles.item}>
          <h3>cheesecakes</h3>
          <p>standard £15</p>
          <p>2 x standard £25</p>
        </div>
        <div className={styles.item}>
          <h3>cupcakes</h3>
          <p>
            <span>box</span> of 4 £10
          </p>
          <p>
            <span>box</span> of 6 £15
          </p>
          <p>
            <span>box</span> of 12 £25
          </p>
        </div>
        <div className={styles.item}>
          <h3>brownies</h3>
          <p>regualr £15</p>
          <p>stuffed £20</p>
        </div>
        <div className={styles.item}>
          <h3>tiffen</h3>
          <p>regular £15</p>
          <p>delux £20</p>
        </div>
      </div>
    </div>
  );
}

export default Prices;
