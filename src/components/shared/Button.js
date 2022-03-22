import React, { Component } from 'react'
import 'shared/styles/Button.scss'

class Button extends Component {
  render() {
    const { className, children } = this.props
    return (
      <button {...this.props} className={`btn ${className || ''}`}>
        {children}
      </button>
    )
  }
}

export default Button
