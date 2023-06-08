import React from "react";
import './form.scss';

const Form = () => {
  return (
    <div className="form">
      <form className="form__content">
        <div className="form__content__input-group">
        <input name="name" type="text" placeholder="Full Name" />
        <input name="email" type="email" placeholder="E-Mail" />
        </div>

        <div className="form__content__textarea">
        <textarea rows="5" name="message"  placeholder="Your Message"></textarea>
        </div>
        <button type="submit"> Send + </button>
      </form>
    </div>
  );
};

export default Form;
