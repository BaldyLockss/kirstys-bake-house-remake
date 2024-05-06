import styles from "./header.module.css";

function Header() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img
          src="/assets/svgs/KBH-logo.svg"
          alt="single line drawing of a cake wrapped in a circle outline"
        />
      </div>
      <div className={styles.nav__menu}>
        <ul>
          <a href="#gallery">
            <li>gallery</li>
          </a>
          <a href="#prices">
            <li>prices</li>
          </a>
        </ul>
      </div>
      <div className={styles.contact}>
        <a href="#enquire">
          <button>enquire</button>
        </a>
      </div>
    </nav>
  );
}

export default Header;
