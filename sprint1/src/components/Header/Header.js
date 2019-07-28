import React from "react";
import logo from "../../Assets/Logo/Logo-brainflix.svg";
import "./Header.scss";
import searchLogo from "../../Assets/Icons/SVG/Icon-search.svg";
import plusSign from "../../Assets/Icons/SVG/Icon-upload.svg";
import mohan from "../../Assets/Images/Mohan-muruge.jpg";

class Header extends React.Component {
  render() {
    return (
      // this head-wrapper div was inserted afterwards to use flex:
      <div className="header-wrapper">
        <div className="Header-logo-container">
          <img src={logo} className="Header-logo" alt="logo" />
        </div>

        <form className="header-form">
          <input className="header-form__input" type="text" placeholder="Search" />
          <div className="header-form__wrapper">
            <button className="header-form__wrapper--button" type="submit">
              UPLOAD
            </button>
            <img className="header-form__wrapper--img" src={mohan} />
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
