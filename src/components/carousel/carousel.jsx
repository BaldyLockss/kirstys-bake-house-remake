import styles from "./carousel.module.css";
import { useState } from "react";

function Carousel(props) {
  const [location, setLocation] = useState(0);

  const leftArrowHandler = () => {
    if (location < 1) return;

    setLocation((prevState) => prevState - 1);
  };

  const rightArrowHandler = () => {
    if (location < props.data.length - 1) {
      setLocation((prevState) => prevState + 1);
    } else {
      setLocation(0);
    }
  };

  const iconHandler = (i) => {
    setLocation(i);
  };

  const mouseOver = (i) => {
    setLocation(i);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__slide}>
          <div className={styles.arrows}>
            <div className={styles.arrow}>
              <button onClick={leftArrowHandler}>
                <img src="/assets/svgs/arrow.svg" alt="left arrow" />
              </button>
            </div>
            <div className={styles.arrow}>
              <button onClick={rightArrowHandler}>
                <img src="/assets/svgs/arrow.svg" alt="left arrow" />
              </button>
            </div>
          </div>
          <ul
            className={styles.slides}
            style={{
              width: `${props.data.length * 100}%`,
              transform: `translateX(-${(location * 100) / props.data.length}%)`
            }}
          >
            {props.data.map((item, i) => {
              return (
                <div className={styles.slide__item}>
                  <li key={i}>
                    <img src={item.src} alt={item.alt} />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={styles.indicators}>
        <ul>
          {props.data.map((__, i) => {
            return (
              <li
                key={i}
                style={{ opacity: i === location ? "1" : "0.5" }}
                onClick={() => iconHandler(i)}
              >
                <div className={styles.indicator}>
                  <img src="/assets/svgs/indicator.svg" alt="eclipse" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Carousel;
