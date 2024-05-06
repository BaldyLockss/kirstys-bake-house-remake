import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <ul>
          <li>
            <h3>socials</h3>
            <img src="/assets/svgs/facebook.svg" alt="facebook logo" />
          </li>
        </ul>
      </div>

      <div className={styles.smallprint}>
        <p>data on your registration of what ever</p>{" "}
        <p>Website designed by Anthony P Reilly ¦ Copyright (C) 2024 </p>
      </div>
    </div>
  );
}

export default Footer;
