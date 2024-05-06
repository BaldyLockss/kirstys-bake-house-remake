import styles from "./form.module.css";
import { useState } from "react";

function Form() {
  const formInitialState = {
    fname: "",
    lname: "",
    email: "",
    number: "",
    request: ""
  };
  const [formData, setFormData] = useState(formInitialState);

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData(formInitialState);
  };

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form
      className={styles.container__form}
      id="enquire"
      onSubmit={submitHandler}
    >
      <div className={styles.form__items}>
        <div className={styles.form__item}>
          <label htmlFor="fname">
            <h3>first name</h3>
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="lname">
            <h3>last name</h3>
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData.lname}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="email">
            <h3>email</h3>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="number">
            <h3>phone number</h3>
          </label>
          <input
            type="number"
            id="number"
            name="number"
            value={formData.number}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.form__item}>
          <label htmlFor="request">
            <h3>request</h3>
          </label>
          <textarea
            id="request"
            name="request"
            value={formData.request}
            onChange={changeHandler}
          />
        </div>
      </div>
      <input type="submit" name="submit" />
    </form>
  );
}

export default Form;
