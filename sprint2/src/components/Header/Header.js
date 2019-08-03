import React from "react";
import logo from "../../Assets/Logo/Logo-brainflix.svg";
import "./Header.scss";
import mohan from "../../Assets/Images/Mohan-muruge.jpg";

import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      // this head-wrapper div was inserted afterwards to use flex:
      <div className="header-wrapper">
        <div className="Header-logo-container">
          <Link to="/"><img src={logo} className="Header-logo" alt="logo" /></Link>
        </div>

        <form className="header-form">
          <input className="header-form__input" type="text" placeholder="Search" />
          <div className="header-form__wrapper">
            <Link to="/upload" className="header-form__wrapper--link">
              <button className="header-form__wrapper--button" type="submit">
              UPLOAD
              </button>
            </Link>
            <img className="header-form__wrapper--img" src={mohan} alt="mohan"/>
            
   
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
