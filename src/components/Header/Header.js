/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import SocialBar from "components/Header/SocialBar"
import "components/Header/styles/header.scss"
import "components/Header/styles/burger.scss"
import Logo from "images/svg/logo.svg"

class Header extends Component {
  state = {
    show: false
  }

  showMenu = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    const { show } = this.state
    return [
      show && <button key='overlay' className='menu__overlay' onClick={this.showMenu} />,
      <header id='header' key='menu'>
        <div className='menu'>
          <NavLink exact to='/' className='menu__home menu__btn' activeClassName='active'>
            <img src={Logo} alt='Fralle Logo' title='Home - Fralle' />
          </NavLink>
          <div className={`nav ${show ? "show" : ""}`}>
            <SocialBar />
          </div>
          <button className={`menu__burger ${show ? "active" : ""}`} onClick={this.showMenu} aria-label='Navigation menu' />
          <NavLink to='/work' className='menu__work menu__btn' activeClassName='active'>
            Work
          </NavLink>
        </div>
      </header>
    ]
  }
}

export default Header
