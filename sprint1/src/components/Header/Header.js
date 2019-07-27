import React from 'react';
import logo from '../../Assets/Logo/Logo-brainflix.svg'
import './Header.scss'
import Form from '../Form/Form'

class Header extends React.Component {
  render(){
      return (
          <>
          <div className="Header-logo-container">
             <img  src={logo} className="Header-logo" alt="logo" />
          </div>

         <Form/>





          </>
      )
  }


}










export default Header