import React from "react";
import searchLogo from "../../Assets/Icons/SVG/Icon-search.svg";
import plusSign from "../../Assets/Icons/SVG/Icon-upload.svg"
import mohan from "../../Assets/Images/Mohan-muruge.jpg";

import "./Form.scss";

class Form extends React.Component {
  render() {
    return (
      <>
        <form className="form">
          <input className="form__input" type="text" placeholder="Search" />
          <div className="form__wrapper">
            <button className="form__wrapper--button" type="submit">UPLOAD</button>
            <img className="form__wrapper--img" src={mohan} />
          </div>
        </form>
      </>
    );
  }
}

export default Form;
